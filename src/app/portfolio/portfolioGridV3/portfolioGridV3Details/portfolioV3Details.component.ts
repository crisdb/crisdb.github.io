import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../core/page-title/page-title.service';
import { ChkService } from '../../../service/chk.service';

@Component({
  selector: 'portfolioV3details',
  templateUrl: './portfolioV3Details.component.html',
  styleUrls: ['./portfolioV3Details.component.scss']
})
export class PortfolioGridV3DetailsComponent implements OnInit {

   /* Variables */
  blogDetail       : any;
  categories       : any;
  tags             : any;

  /*
   * Classes of social ul, li
   */
  socialsClasses : any = {ulClass:"", liClass:"", linkClass:""}

	constructor(private pageTitleService: PageTitleService, private service:ChkService) {

	  /* Page title */
	  this.pageTitleService.setTitle("JPMorgan & Chase");
	  /* Page subTitle */
	  // this.pageTitleService.setSubTitle(" Build something incredible! ");

    this.service.getcategories().
       subscribe(response => {this.categories = response},
                 err      => console.log(err),
                 ()       => this.categories
             );
    this.service.getTags().
         subscribe(response => { this.tags = response },
         err => console.log(err),
         () => this.tags
         );
	}

  ngOnInit() {
  }

}
