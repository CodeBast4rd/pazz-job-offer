import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApplicantService {
  currentApplicant: any;

  foundAllBugsInJobOffer() {
    return true;
  }

  bashedJobOfferCodeEnough() {
    return true;
  }
}
