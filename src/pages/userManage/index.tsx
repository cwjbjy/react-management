import { useCallback, useState } from 'react';
import { useRequest } from 'ahooks';
import { set } from 'local-storage';
import { Card, Modal, message, Spin } from 'antd';
import PassChange from './components/passChange';
import UserTable from './components/userTable';
import API from '@/apis';
import { USER_INFO } from '@/config/constant.js';
import { Item } from './components/userTable';
import './index.scss';

interface Info {
  id: string;
  user_name: string;
}

const setData = (data: Item[]) => {
  let newArr: Item[] = [];
  data.forEach((item: Item, index: number) => {
    let newItem = Object.assign({}, item, { key: index });
    newArr.push(newItem);
  });
  return newArr;
};

const UserManage = () => {
  const [info, setInfo] = useState<Info>({} as Info);
  const [isModalVisible, setModal] = useState(false);
  const [password, setPassword] = useState('');
  const [tableData, setTableData] = useState<Item[]>([]);

  const onModal = useCallback(({ isModalVisible, info }) => {
    setModal(isModalVisible);
    setInfo(info);
  }, []);

  const { run, loading } = useRequest(API.getUsers, {
    onSuccess: (res: { code: number; data: Item[] }) => {
      setTableData(setData(res.data));
    },
  });

  const amend = useRequest(API.updateUser, {
    manual: true,
    onSuccess: (data: { code: number }, params) => {
      if (data.code === 200) {
        message.success({
          content: '密码修改成功',
        });
        set(USER_INFO, {
          userName: params[0].user_name,
          passWord: params[0].password,
          flag: true,
        });
      }
    },
  });

  const deleteUser = useRequest(API.deleteUser, {
    manual: true,
    onSuccess: () => {
      message.success({
        content: '删除成功',
      });
      run();
    },
  });

  const onDelete = useCallback(
    (value) => {
      let { id } = value;
      deleteUser.run({ id });
    },
    [deleteUser],
  );

  const handleOk = useCallback(() => {
    let { id, user_name } = info;
    const params = {
      id,
      user_name,
      password,
    };
    amend.run(params);
    setModal(false);
  }, [amend, info, password]);

  const getPass = useCallback((val) => setPassword(val), []);

  return (
    <section>
      {loading ? (
        <Spin />
      ) : (
        <>
          <Card hoverable>
            <strong>管理员可修改密码，普通用户可删除</strong>
            <UserTable tableData={tableData} onModal={onModal} onDelete={onDelete} />
          </Card>
          <Modal title="修改密码" visible={isModalVisible} onOk={handleOk} onCancel={() => setModal(false)}>
            <PassChange getPass={getPass} />
          </Modal>
        </>
      )}
    </section>
  );
};

export default UserManage;
