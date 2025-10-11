import React from 'react';

// 定义错误边界的 props 接口
interface ErrorBoundaryProps {
    children: React.ReactNode;
}

// 定义错误边界的 state 接口
interface ErrorBoundaryState {
    hasError: boolean;
}

// 创建错误边界组件
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // 当子组件抛出错误时调用
    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        // 更新状态以便下次渲染时可以显示备用 UI
        return { hasError: true };
    }

    // 记录错误信息
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("错误捕获:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // 可以渲染任何自定义的降级 UI
            return <h1>出错了！</h1>;
        }

        return this.props.children; 
    }
}