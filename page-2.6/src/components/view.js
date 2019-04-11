/**
 * @author M
 * @date 2019-04-08
 * @description umi block 测试页面
 */
import { PureComponent, Fragment } from 'react';
import { Button } from 'antd';

export default class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Fragment>
                <Button>submit</Button>
            </Fragment>
        );
    }
}