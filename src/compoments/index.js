/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-05-20 23:26:53
 * @LastEditTime: 2020-05-21 00:30:19
 * @LastEditors: zhangcunxia
 * @Description:
 */
import Button from './lib/Button';

export type ListItem = {
  title: string,
  key: string,
};

const ComponentList: ListItem[] = [
  {
    title: 'Button',
    key: '1',
  },
  {
    title: 'Text',
    key: '2',
  },
];
export { Button, ComponentList };
