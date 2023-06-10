import React from 'react'
import bestViewImage from '../best_view.jpg';
import bestView2 from '../best_veiw_02.jpg';
import bestView3 from '../best_veiw_03.jpg';
import bestView4 from '../best_veiw_04.jpg';
import bestView5 from '../best_veiw_05.jpg';
import bestView6 from '../best_veiw_06.jpg';
import bestView7 from '../best_veiw_07.jpg';
import bestView8 from '../best_veiw_08.jpg';
import bestView9 from '../best_veiw_09.jpg';
import bestView10 from '../best_veiw_10.jpg';
import bestView11 from '../best_veiw_11.jpg';




const BestView = () => {
  return (
    <section className='images_view'>
      <div className="best_imgs_section">
         <div><img src={bestViewImage} alt="images"/></div>
         <div><img src={bestView2} alt="images"/></div>
         <div><img src={bestView3} alt="images"/></div>
         <div><img src={bestView4} alt="images"/></div>
         <div><img src={bestView5} alt="images"/></div>
         <div><img src={bestView6} alt="images"/></div>
         <div><img src={bestView7} alt="images"/></div>
         <div><img src={bestView8} alt="images"/></div>
         <div><img src={bestView9} alt="images"/></div>
         <div><img src={bestView10} alt="images"/></div>
         <div><img src={bestView11} alt="images"/></div>
      </div>
    </section>
  )
}

export default BestView