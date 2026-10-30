import React, { useState, useEffect, useRef } from 'react';
import { Terminal, ChevronDown, ChevronUp, Play, Pause, Trash2, Maximize2, Minimize2 } from 'lucide-react';

interface LogLine {
  id: string;
  time: string;
  prefix: string;
  message: string;
  tagColor: string;
}

const SAMPLE_LOGS: Array<{ prefix: string; message: string; tagColor: string }> = [
  { prefix: 'MODEL_TRAIN', message: 'Epoch 18/25: loss=0.0342 val_loss=0.0319 accuracy=98.7%', tagColor: 'text-[#48D9D0]' },
  { prefix: 'OPTIMIZER', message: 'AdamW lr_decay applied -> current_lr: 2.45e-4', tagColor: 'text-[#8B7CFF]' },
  { prefix: 'OLLAMA_CORE', message: 'Local weights mapped: llama3-q4_k_m.gguf (4.1 GB)', tagColor: 'text-[#48D9D0]' },
  { prefix: 'DATA_PIPELINE', message: 'Batch [128, 512] normalized with standard scaler', tagColor: 'text-[#A5ADBA]' },
  { prefix: 'SCIKIT_LEARN', message: 'CrossValidation(k=5) mean_f1: 0.941 across validation splits', tagColor: 'text-[#8B7CFF]' },
  { prefix: 'EMBEDDING', message: 'Cosine similarity matrix computed for 1,024 prompt vectors', tagColor: 'text-[#48D9D0]' },
  { prefix: 'INFERENCE', message: 'Forward pass complete: 18.4ms/token (quantized FP16)', tagColor: 'text-[#8B7CFF]' },
  { prefix: 'ATTENTION', message: 'MultiHeadAttention(heads=12) weights converged', tagColor: 'text-[#48D9D0]' },
  { prefix: 'NEURAL_GRAPH', message: 'Gradient norm clipped to threshold max_norm=1.0', tagColor: 'text-[#A5ADBA]' },
  { prefix: 'EVALUATION', message: 'Precision: 0.962 | Recall: 0.954 | AUC-ROC: 0.991', tagColor: 'text-[#48D9D0]' },
];

export const HeroTerminal: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [logs, setLogs] = useState<LogLine[]>([
    {
      id: 'init-1',
      time: '00:01:04',
      prefix: 'KERNEL_INIT',
      message: 'Neural runtime initialized on compute cluster',
      tagColor: 'text-[#48D9D0]'
    },
    {
      id: 'init-2',
      time: '00:01:05',
      prefix: 'AI_STUDIO',
      message: 'Workspace loaded: Prathviraj Godbole / AI & ML Track',
      tagColor: 'text-[#8B7CFF]'
    },
    {
      id: 'init-3',
      time: '00:01:06',
      prefix: 'TENSOR_FLOW',
      message: 'CUDA device active: unified memory buffer allocated (4.0 GB)',
      tagColor: 'text-[#48D9D0]'
    }
  ]);

  const logContainerRef = useRef<HTMLDivElement>(null);

  // Auto-generate randomized AI/ML log lines
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const randomTemplate = SAMPLE_LOGS[Math.floor(Math.random() * SAMPLE_LOGS.length)];

      setLogs((prev) => {
        const next = [
          ...prev.slice(-18), // keep last 20 lines max
          {
            id: `${Date.now()}-${Math.random()}`,
            time: timeStr,
            prefix: randomTemplate.prefix,
            message: randomTemplate.message,
            tagColor: randomTemplate.tagColor
          }
        ];
        return next;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Auto-scroll to latest log
  useEffect(() => {
    if (!isCollapsed && logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs, isCollapsed]);

  return (
    <div className="w-full mt-8 pt-6 border-t border-[#263044]/60">
      <div className="rounded-lg bg-[#080B12] border border-[#263044] overflow-hidden shadow-2xl transition-all duration-300">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#101521] border-b border-[#263044] text-xs font-mono select-none">
          {/* Left: Window Controls + Title */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/70" />
            </div>
            <div className="flex items-center gap-1.5 text-[#F5F7FA] font-medium ml-1">
              <Terminal className="w-3.5 h-3.5 text-[#48D9D0]" />
              <span className="text-[11px] tracking-wide">ai_ml_runtime.log</span>
            </div>
            <span className="hidden sm:inline-block text-[10px] text-[#A5ADBA] px-1.5 py-0.5 rounded bg-[#141C2A] border border-[#263044]">
              {isPlaying ? 'STREAMING' : 'PAUSED'}
            </span>
          </div>

          {/* Right: Actions (Play/Pause, Clear, Collapse) */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 rounded text-[#A5ADBA] hover:text-[#48D9D0] hover:bg-[#141C2A] transition-colors cursor-pointer"
              title={isPlaying ? 'Pause log stream' : 'Resume log stream'}
              aria-label={isPlaying ? 'Pause log stream' : 'Resume log stream'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <button
              type="button"
              onClick={() => setLogs([])}
              className="p-1 rounded text-[#A5ADBA] hover:text-[#F5F7FA] hover:bg-[#141C2A] transition-colors cursor-pointer"
              title="Clear terminal logs"
              aria-label="Clear terminal logs"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1 rounded text-[#A5ADBA] hover:text-[#8B7CFF] hover:bg-[#141C2A] transition-colors cursor-pointer ml-1"
              title={isCollapsed ? 'Expand terminal' : 'Collapse terminal'}
              aria-label={isCollapsed ? 'Expand terminal' : 'Collapse terminal'}
            >
              {isCollapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        {!isCollapsed ? (
          <div
            ref={logContainerRef}
            className="p-3.5 font-mono text-[11px] h-36 overflow-y-auto space-y-1.5 scroll-smooth bg-[#080B12]/95"
          >
            {logs.length === 0 ? (
              <div className="text-[#A5ADBA] italic py-4 text-center">
                Terminal output cleared. Waiting for next telemetry event...
              </div>
            ) : (
              logs.map((log) => (
                <div key={log.id} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-[#A5ADBA]/60 shrink-0 select-none">
                    [{log.time}]
                  </span>
                  <span className={`font-semibold shrink-0 ${log.tagColor}`}>
                    &lt;{log.prefix}&gt;
                  </span>
                  <span className="text-[#F5F7FA] break-all">
                    {log.message}
                  </span>
                </div>
              ))
            )}
            {/* Blinking prompt line */}
            <div className="flex items-center gap-1.5 text-[#48D9D0] pt-1">
              <span>$</span>
              <span className="text-[#A5ADBA] text-[10px]">ai_stream::listening</span>
              <span className="w-1.5 h-3.5 bg-[#48D9D0] inline-block animate-pulse ml-0.5" />
            </div>
          </div>
        ) : (
          <div
            onClick={() => setIsCollapsed(false)}
            className="px-3.5 py-1.5 bg-[#080B12] text-[11px] font-mono text-[#A5ADBA] flex items-center justify-between cursor-pointer hover:bg-[#101521] transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#48D9D0] animate-pulse" />
              Terminal collapsed. Click to view simulated AI/ML telemetry ({logs.length} events recorded).
            </span>
            <span className="text-[#8B7CFF] text-[10px] uppercase">Expand</span>
          </div>
        )}

        {/* Terminal Footer Strip */}
        <div className="px-3.5 py-1.5 bg-[#101521] border-t border-[#263044] flex items-center justify-between text-[10px] font-mono text-[#A5ADBA]">
          <span className="text-[#48D9D0]">Model: Scikit-learn + Local Ollama / PyTorch</span>
          <span>utf-8 // 60fps</span>
        </div>
      </div>
    </div>
  );
};
