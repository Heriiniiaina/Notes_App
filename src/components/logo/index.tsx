import s from "./style.module.css";
interface LogoProps{
  image:any,
  title:string,
  subtitle:string,
  onClick:React.MouseEventHandler<HTMLDivElement>
}
export function Logo({ image, title, subtitle,onClick }:LogoProps) {
  return (
    <div onClick={onClick}>
      <div className={s.container}>
        <img className={s.img} src={image} alt="logo" />
        <div className={s.logo_txt}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </div>
  );
}
