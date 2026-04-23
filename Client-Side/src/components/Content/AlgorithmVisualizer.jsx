import React, { useState, useEffect } from 'react';
import './AlgorithmVisualizer.css';

const AlgorithmVisualizer = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' && currentStep < steps.length - 1) {
                setCurrentStep((prev) => prev + 1);
            } else if (e.key === 'ArrowLeft' && currentStep > 0) {
                setCurrentStep((prev) => prev - 1);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentStep, steps.length]);

    if (!steps || steps.length === 0) return null;

    const stepData = steps[currentStep];

    return (
        <div className="algo-visualizer">
            <div className="vis-header">
                <h4>Interactive Flow</h4>
                <div className="vis-controls">
                    <button
                        className="btn-control"
                        onClick={() => setCurrentStep(prev => prev - 1)}
                        disabled={currentStep === 0}
                    >
                        &lt; Prev
                    </button>
                    <span className="step-counter">
                        Step {currentStep + 1} of {steps.length}
                    </span>
                    <button
                        className="btn-control"
                        onClick={() => setCurrentStep(prev => prev + 1)}
                        disabled={currentStep === steps.length - 1}
                    >
                        Next &gt;
                    </button>
                </div>
            </div>

            <div className="vis-desc">
                <p>{stepData.description}</p>
            </div>

            <div className="vis-body">
                <div className="vis-state">
                    <h5>Memory / Array State</h5>
                    <div className="state-box">
                        <pre>{stepData.state}</pre>
                    </div>
                </div>

                {stepData.codeSnippet && (
                    <div className="vis-code snippet-active">
                        <h5>Currently Executing Node</h5>
                        <pre><code>{stepData.codeSnippet}</code></pre>
                    </div>
                )}
            </div>

            <div className="vis-footer">
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AlgorithmVisualizer;
