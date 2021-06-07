class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: props.test,
            aaa: props.aaa
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <h2>{this.state.aaa}</h2>
                <button onClick={() => this.setState({msg: 'Bye'})}>Click</button>
            </div>
        );
    }
}

// Hello test=ooooに値を渡すことで、コンストラクターで値をpropsとして受け取れる。
ReactDOM.render(<Hello test='hogehoge' aaa='aaa'/>, document.querySelector('#app'));