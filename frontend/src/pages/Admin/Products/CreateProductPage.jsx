import { Form, Input, InputNumber, Select, Spin, message } from "antd";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const CreateProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      console.log(values);
      const response = await fetch(`${apiUrl}/api/products/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        message.success("Ürün başarıyla oluşturuldu.");
        //formu oluşturduktan sonra temizleyelim.
        form.resetFields();
      } else {
        message.error("Ürün oluşturulurken bir hata oluştu.");
      }
    } catch (error) {
      console.log("Ürün oluşturma hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Ürün ismi"
          name="name"
          rules={[
            {
              required: true,
              message: "Lütfen ürün adını giriniz!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Fiyat"
          name="current"
          rules={[
            {
              required: true,
              message: "Lütfen ürün fiyatını giriniz!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="İndirim Oranı"
          name="discount"
          rules={[
            {
              required: true,
              message: "Lütfen ürün indirim oranını giriniz!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Ürün Açıklaması"
          name="description"
          rules={[
            {
              required: true,
              message: "Lütfen ürün açıklaması  giriniz!",
            },
          ]}
        >
        {/* react ouill uygulandı */}
          <ReactQuill theme="snow"  style={{
            backgroundColor:"white"
          }}/>
        </Form.Item>


        <Form.Item
          label="Ürün görselleri (link)"
          name="img"
          rules={[
            {
              required: true,
              message: "Lütfen ürünün  an az 4 görsel linkini giriniz!",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Her bir görsel linkini yeni satıra yazınız lütfen!"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>
        <Form.Item
          label="Ürün Renkleri ( RGB kodları )"
          name="colors"
          rules={[
            {
              required: true,
              message: "Lütfen ürünün  an az 1 rengini giriniz!",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Her bir RGB kodunu yeni satıra yazınız lütfen!"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>
        <Form.Item
          label="Ürün Bedenleri"
          name="sizes"
          rules={[
            {
              required: true,
              message: "Lütfen en az 1 ürünün bedeni giriniz!",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Her bir bedeni yeni satıra yazınız lütfen!"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>
        <Form.Item
          label="Ürün Kategorisi"
          name="category"
          rules={[
            {
              required: true,
              message: "Lütfen 1 kategori seçin!",
            },
          ]}
        >
          <Select>
            <Select.Option value="SmartPhone" key={"SmartPhone"}>SmartPhone</Select.Option>
          </Select>
        </Form.Item>

        {/* 
        <Button type="primary" htmlType="submit">
          Oluştur
        </Button> */}
      </Form>
    </Spin>
  );
};

export default CreateProductPage;
