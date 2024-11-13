import s from "./style.module.css";
interface LogoProps{
  image:any,
  title:string,
  subtitle:string
}
export function Logo({ image, title, subtitle }:LogoProps) {
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src={image} alt="logo" />
        <div className={s.logo_txt}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </>
  );
}
