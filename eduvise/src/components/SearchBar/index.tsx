import Image from "next/image";
import styles from "./style.module.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchBar(): React.ReactNode {
  return (
    <div className={styles.search}>
      <Input
        size="large"
        placeholder="Search..."
        prefix={<SearchOutlined />}
        className={styles.input}
      />
    </div>
  );
}
