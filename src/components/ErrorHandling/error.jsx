import React from "react";
class ErrorBoundary extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {hasErrored: false}
    }

     static getDerivedStateFromError(){ 
        return {hasErrored:true}
    }

    componentDidCatch(error,errorInfo){
        console.log(errorInfo)
    }

    render(){ 
        if(this.state.hasErrored){ 
            return <div>Something went wrong</div>
        }

        return this.props.children
    }
}


export default ErrorBoundary