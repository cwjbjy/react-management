import React, { useState } from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "./index.scss";
import { useMemo } from "react";
import ls from "local-storage";
import { useRequest } from "ahooks";
import API from "@/service/fetch/index";
import { img_url } from "@/service/fetch/lib/baseUrl.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { SETFILENAME } from "@/store/file.js";

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const FileUp = () => {
  const { fileName } = useSelector((state) => state.file);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const imgAction = useMemo(() => {
    return process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:9000/api/uploadImage"
      : "https://wen.cwjbjy.online/api/uploadImage";
  }, []);
  const userName = useMemo(() => ls.get("userInfo").userName, []);
  const { data, run } = useRequest(API.getImage, {
    manual: true,
  });

  useEffect(() => {
    if (data) {
      dispatch(SETFILENAME(data.Data[0].photo));
    }
  }, [data, dispatch]);

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      run({ user_name: userName });
      setLoading(false);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <section>
      <Card hoverable>
        <p style={{ marginBottom: 20 }}>
          <strong>上传头像功能，上传完可点击首页观看效果</strong>
        </p>
        <Upload
          name="file"
          data={{ user_name: userName }}
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action={imgAction}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {fileName ? (
            <img
              src={`${img_url}${fileName}`}
              alt="avatar"
              style={{ width: "100%" }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
        <p className="ant-upload-hint">只能上传jpg/png文件，且不超过2MB</p>
      </Card>
    </section>
  );
};

export default React.memo(FileUp);
