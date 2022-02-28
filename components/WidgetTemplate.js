import React, { Component } from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import styles from '../styles/WidgetTemplate.module.css'

export class WidgetTemplate extends Component {

  render() {
    const myLoader = () => {
      return `https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29zdGVubG9zZSUyMGJpbGRlcnxlbnwwfHwwfHw%3D&w=1000&q=80`
    }

    //newWidget
    let newWidget = <div className={styles.widgetTemplate}>
    <div  style={{ display: this.props.showUrgencyTime ? 'block' : 'none' }}>
      <div className={styles.widgetTemplateBorder}
    
              style={{
                
                backgroundColor: this.props.timerBackgroundColor,
                color: this.props.timerTextColor,
                fontSize: this.props.timerTextSize
              }}>
            
          
            <div className={styles.inputs}>{this.props.timerText}</div>
            <div className={styles.widgetTemplateBorderSpan}>10:20</div> 
            <div>mins!</div>
        </div>
    </div>
        
    

      <h2 className={styles.widgetTemplateh2} style={{ display: this.props.showProductName ? 'block' : 'none' }}>PRODUCT NAME FROM SHOPIFY</h2>
    <div className={styles.body}>
      
      
      <div className="widgetTemplateImg" style={{ display: this.props.showProductImage ? 'block' : 'none' }}>
        <Image
          loader={myLoader}
          src="me.png"
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </div>
      <div style={{ display: this.props.showPrice ? 'block' : 'none' }}>12.99$</div>
      <div className={styles.widgetTemplateVariants}>
        <select
          className="form-select my-select shadow-none"
          aria-label="Default select example"
          name="generalStyle"
          style={{ display: this.props.showVariants ? 'block' : 'none' }}
        >

          <option >
            {/* {this.state.id === 'create' ? 'choose your style !!' : this.state.lukaRequest.generalStyle} */}
            choose your variant
          </option>
          <option defaultValue="Rounded Style">
            s
          </option>
          <option defaultValue="Two">
            xs
          </option>
          <option defaultValue="Three">
            ,
          </option>
        </select>



        <div className="checkboxes"  >
          <div className="form-check">

            <input
              name="showStatusDesktop"
              className="form-check-input shadow-none"
              type="checkbox"
              defaultChecked

            ></input>
            <label
              className="form-check-label"
              htmlFor="flexCheckDefault"
            >
              Quantity
            </label>
          </div>

          <div className="form-check">
            <input
              name="showStatusMobile"
              className="form-check-input shadow-none"
              type="checkbox"

            ></input>
            <label
              className="form-check-label"
              htmlFor="flexCheckChecked"
            >
              Sale
            </label>
          </div>
        </div>
      </div>
      <div className="widgetTemplateButton">

        <Button type="button" id="addPagesToShow" color="secondary" auto>Add to Cart</Button>
      </div>
    </div>

                  </div>
    //end newWidget

    let updatedWidget = <div >
    <div >
      <div 
    
              style={{
                
                backgroundColor: this.props.timerBackgroundColorPut,
               
              }}>
            
          
        
            <div>mins!</div>
        </div>
    </div>
        
    


        



       
                  </div>
    return (
      <>
       {this.props.id === 'create' ? newWidget : updatedWidget}
        
      </>
    )
  }
}

export default WidgetTemplate