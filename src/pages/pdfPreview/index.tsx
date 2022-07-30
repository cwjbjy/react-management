import React, { useState } from 'react';
import { Card, Button, Modal } from 'antd';
import './index.scss';

const PdfPreview = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <section>
      <Card hoverable>
        <strong>点击按钮，进行pdf预览，具有放大、缩小、下载、打印功能</strong>
        <div className="frontArea">
          <Button type="primary" size="large" onClick={() => setIsModalVisible(true)}>
            点我弹框
          </Button>
        </div>
        <Modal
          title="pdf预览"
          style={{ top: 20 }}
          width="90%"
          visible={isModalVisible}
          footer={null}
          onCancel={() => setIsModalVisible(false)}
        >
          <iframe src="/static/cwj.pdf" frameBorder="0" className="pdf" title="pdf"></iframe>
        </Modal>
      </Card>
    </section>
  );
};

export default React.memo(PdfPreview);
