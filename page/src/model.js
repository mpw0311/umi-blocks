import { message } from 'antd';
import * as api from './service';
export default {

    namespace: 'pageModel',

    state: {
        data: {}
    },
    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (/^\/sys\/page\//.test(pathname)) {
                    dispatch({
                        type: 'getData',
                        payload: {}
                    });
                }
            });
        },
    },

    effects: {
        *getData({ payload }, { call, put }) {
            const { data = {} } = yield call(api.fetch, { ...payload });
            yield put({
                type: 'save',
                payload: {
                    data
                },
            });
        },
        *exportExcel({ payload }, { call, put }) {
            const { status, /*excelTitle*/ } = yield call(api.exportExcel, { ...payload });
            if (status === true) {
                message.success("下载已成功，请到下载页下载");
            } else {
                message.warning("下载失败，请重新下载");
            }
        },

    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
