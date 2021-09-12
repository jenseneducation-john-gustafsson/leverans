import Image from '../components/Category-page/Category-overview/CategoryImage'
import '../components/Category-page/Category-overview/Category-overview.css'

const CategoryOveriew = () => {
    return (
        <div class="container">
        <div class="row">
        <b class="Cat1">Film Noir</b>
          <div class="col">
          <div class="p-3"></div>
            <Image />
          </div>
          <div class="col">
          <div class="p-3"></div>
            <Image />
          </div>
          <div class="col">
          <div class="p-3"></div>
            <Image />
          </div>
          <div class="col">
          <div class="p-3"></div>
            <Image />
          </div>
        </div>

        <div class="row"> 
        <b class="Cat2">Horror</b>
          <div class="col">
          <div class="p-3"></div>
            
            <Image />
          </div>
          <div class="col">
          <div class="p-3"></div>
            <Image />
          </div>
          <div class="col">
          <div class="p-3"></div>
            <Image />
          </div>
          <div class="col">
          <div class="p-3"></div>
            <Image />
          </div>
        </div>

        <div class="row">
        <b class="Cat3">Action</b>
          <div class="col">
          <div class="p-3"></div>
            
            <Image />
          </div>
          <div class="col">
          <div class="p-3"></div>
            <Image />
          </div>
          <div class="col">
          <div class="p-3"></div>
            <Image />
          </div>
          <div class="col">
          <div class="p-3"></div>
            <Image />
          </div>

        </div>
        

      </div>
      
      
    );
  }
  
  export default CategoryOveriew;