// const Feature = ({ icon, title }) => {
//   return (
//     <article className="service">
//       <span className="service-icon">
//         <i className={icon}></i>
//       </span>
//       <div className="service-info">
//         <h4 className="service-title">{title}</h4>
//       </div>
//     </article>
//   );
// };

// export default Feature;

const Feature = ({ icon, title }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
      </div>
    </article>
  );
};

export default Feature;
