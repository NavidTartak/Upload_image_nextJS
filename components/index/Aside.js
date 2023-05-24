import React from "react";
import styles from "./Aside.module.css";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import Image from "next/image";
import { toPersianNumber } from "@/utilities/formatHelper";
const Aside = () => {
  const user = useSelector((state) => state.user);
  return (
    <aside className={`${styles.side}`}>
      <div className={`${styles.imageContainer}`}>
        {!user.profileImage ? (
          <div className={`${styles.emptyImageContainer}`}>
            <FaUserAlt size={40} />
          </div>
        ) : (
          <Image
            src={`/images/${user.profileImage}`}
            alt={`${user.name} ${user.lastname}`}
            width={100}
            height={100}
            className={`${styles.borderRadius}`}
          />
        )}
      </div>
      <div className="divider"></div>
      <div className={`${styles.dataContainer}`} dir="rtl">
        {!user.name && !user.lastname ? (
          <label className={styles.textDanger}>کاربر نامشخص</label>
        ) : (
          <label>
            {user.name} {user.lastname}
          </label>
        )}
        {!user.phoneNumber ? null : (
          <label>{toPersianNumber(user.phoneNumber)}</label>
        )}
      </div>
    </aside>
  );
};

export default Aside;
