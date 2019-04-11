/**
 * @author M
 * @date 2019-04-08
 * @description umi block 测试页面
 */
import { PureComponent } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import { Page } from 'components';
import styles from './index.less';

class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Page className={styles.content}>
                <Button>submit</Button>
            </Page>
        );
    }
}
export default connect(({ pageModel, loading }) => {
    return {
        ...pageModel,
        loading: loading.models.snbFour
    };
})(Index);