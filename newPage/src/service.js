import { request } from 'utils';
export function fetch(payload) {
    return request(`/api/page`, {
        method: 'POST',
        body: JSON.stringify({
            ...payload
        }),
    });
}
export function exportExcel(payload) {
    return request(`/downloadTask/exportExcelNew`, {
        method: 'POST',
        body: JSON.stringify({
            ...payload
        }),
        setting: {
            STATUS: 0
        }
    });
}