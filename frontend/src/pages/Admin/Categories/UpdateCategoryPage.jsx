import { Button, Form, Input } from "antd";
const UpdateCategoryPage = () => {

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form name="basic" layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Kategori ismi"
        name="name"
        rules={[
          {
            required: true,
            message: "Kategori adını giriniz lütfen!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Kategori görseli (link)"
        name="img"
        rules={[
          {
            required: true,
            message: "kategori görsel linkini giriniz lütfen!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Güncelle
      </Button>
    </Form>
  );
};

export default UpdateCategoryPage;
