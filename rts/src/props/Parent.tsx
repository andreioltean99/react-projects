import { Child } from './Child';

const Parent = () => {
    return (
        <Child color="red" onClick={() => {console.log('clicked')}} >tst</Child>

    )
}

export default Parent;