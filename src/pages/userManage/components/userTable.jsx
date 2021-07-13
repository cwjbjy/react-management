import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Table, Image, Button, Popconfirm } from "antd";
import { img_url } from "@/service/fetch/lib/baseUrl";
const UserTable = (props) => {

  const { tableData, onModal, onDelete } = props;

  const onEdit = (params) => {
    onModal({
      isModalVisible: true,
      info: params,
    });
  };

  const columns = [
    {
      title: "用户名",
      dataIndex: "user_name",
      align: "center",
    },
    {
      title: "单击图像可以放大",
      dataIndex: "photo",
      align: "center",
      render: (text) => <Image width={40} src={`${img_url}${text}`} />,
    },
    {
      title: "角色描述",
      dataIndex: "authority",
      align: "center",
      render: (text) => (
        <span className={text === 1 ? "blue" : ""}>
          {text === 1 ? "管理员" : "普通用户"}
        </span>
      ),
    },
    {
      title: "注册时间",
      dataIndex: "createTime",
      align: "center",
    },
    {
      title: "操作",
      key: "action",
      align: "center",
      render: (text, record) => (
        <>
          {record.authority === 1 ? (
            <Button
              type="text"
              className="blue"
              icon={<EditOutlined />}
              onClick={() => onEdit(record)}
            >
              编辑
            </Button>
          ) : (
            <Popconfirm
              title="确认删除?"
              onConfirm={() => onDelete(record)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="text" className="red" icon={<DeleteOutlined />}>
                删除
              </Button>
            </Popconfirm>
          )}
        </>
      ),
    },
  ];

  return (
    <Table
      bordered
      columns={columns}
      dataSource={tableData}
      style={{ marginTop: 10 }}
    />
  );
};

export default UserTable;
