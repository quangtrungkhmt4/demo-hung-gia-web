import React from 'react';
import { makeStyles } from '@material-ui/core';

import { rightArrow } from './../../../assets/images';

const useStyle = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(5),
  },
  specificationItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  specificationItemIcon: {},
  specificationItemInfo: {
    paddingLeft: theme.spacing(3),
  },
  specificationItemNumber: {
    fontSize: 48,
    fontWeight: 700,
    color: '#02813a',
    lineHeight: '48px',
  },
  specificationItemTitle: {},
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainerLeft: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentContainerLeftTitle: {
    textTransform: 'uppercase',
    borderLeft: '4px solid #43a16c',
    paddingLeft: 20,
    marginBottom: 24,
    '& :first-child': {
      fontWeight: 700,
      lineHeight: '40px',
      fontSize: 31,
    },
    '& :last-child': {
      color: '#6a6a6a',
      fontSize: 18,
      lineHeight: '18px',
      fontWeight: 400,
      marginTop: 4,
    },
  },
  contentContainerLeftContent: {
    paddingRight: theme.spacing(7),
    textAlign: 'justify',
    lineHeight: '25px',
  },
  contentContainerLeftViewMore: {
    textTransform: 'uppercase',
    marginTop: theme.spacing(6),
    cursor: 'pointer',
    color: '#43a16c',
    fontWeight: 600,
    '& img': {
      paddingLeft: theme.spacing(1),
    }
  },
  contentContainerRight: {},
  specificationContainer: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export const AboutUsItem = () => {
  const classes = useStyle();

  const SpecificationItem = (props: any) => {
    return (
      <div className={classes.specificationItem}>
        <div className={classes.specificationItemIcon}>{props.icon}</div>
        <div className={classes.specificationItemInfo}>
          <div className={classes.specificationItemNumber}>{props.number}</div>
          <div className={classes.specificationItemTitle}>{props.title}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.contentContainerLeft}>
          <div className={classes.contentContainerLeftTitle}>
            <div>Về chúng tôi</div>
            <div>Siêu thị VLXD Hưng Gia</div>
          </div>
          <div className={classes.contentContainerLeftContent}>
            Từ năm 1992 ... Công ty TNHH Đá Tự Nhiên Nam Giang là một trong những công ty hàng đầu về sản xuất và xuất khẩu các sản phẩm đá tự nhiên tại Thanh Hóa, Việt Nam. Với ba mươi năm kinh nghiệm, đội ngũ công nhân chuyên nghiệp và các máy móc hiện đại; các sản phẩm đá tự nhiên của chúng tôi đã và đang xuất khẩu tới các thị trường Bỉ, Hà Lan, Mỹ, Panama, Úc, Nhật, Thái Lan ... và các công trình quan trọng ở trong nước như: nhà khách chính phủ, khách sạn Intercontinental ... Chúng tôi có các nhà máy sản xuất và khu mỏ ở Yên Lâm cho đá xanh đen; Vinh (Nghệ An) cho đá xanh mài cát, đá trắng; Hà Trung cho đá bông mai; Đông Nam cho đá vàng dăm kết và các sản phẩm đá mosaic. Hãy đến với công ty Đá Tự Nhiên Nam Giang, bạn sẽ được phục vụ những sản phẩm chất lượng cao, đơn giá cạnh tranh và sự phục vụ tốt nhất .
          </div>
          <div className={classes.contentContainerLeftViewMore}>
            Xem chi tiết
            <img src={rightArrow} alt={rightArrow + "rightArrow"} />
          </div>
        </div>
        <div className={classes.contentContainerRight}>
          <iframe
            width="585"
            height="329"
            title="intro"
            src="https://www.youtube.com/embed/9r894x1Bea8"
          ></iframe>
        </div>
      </div>

      <div className={classes.specificationContainer}>
        <SpecificationItem
          number={20}
          title={"Năm thành lập"}
          icon={<img src="https://namgiangstone.com/html/style/images/ic-intro-1.png" alt="Nam thanh lap"/>}
        />
        <SpecificationItem
          number={100}
          title={"Sản phẩm"}
          icon={<img src="https://namgiangstone.com/html/style/images/ic-intro-2.png" alt="San pham"/>}
        />
        <SpecificationItem
          number={2000}
          title={"Đối tác khách hàng"}
          icon={<img src="https://namgiangstone.com/html/style/images/ic-intro-3.png" alt="Doi tac khach hang"/>}
        />
        <SpecificationItem
          number={999}
          title={"Công trình dự án"}
          icon={<img src="https://namgiangstone.com/html/style/images/ic-intro-4.png" alt="Cong trinh du an"/>}
        />
      </div>
    </div>
  );
}
