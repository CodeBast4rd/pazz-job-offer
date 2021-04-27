// checkout https://stackblitz.com/edit/pazz-job-offer
// or for backend fans https://www.npmjs.com/package/@pazznetwork/pazz-apply-job
import { Component } from "@angular/core";
import { ApplicantService } from "./services/applicant.service";
import { EmployeeService } from "./services/employee.service";

@Component({
  selector: "pz-job-offer",
  templateUrl: "./job-offer.html",
  styleUrls: ["./job-offer.less"]
})
export class JobOffer {
  // TODO: use i18n logic
  readonly TITLE = {
    JOB_OFFER: "(Junior/Senior) Full Stack Entwickler (m/w/d)",
    TASKS: "Deine Aufgaben:",
    QUALIFICATIONS: "Deine Qualifikationen:",
    BENEFITS: "Unsere Benefits:"
  };

  readonly desiredCompanies = "pazz gmbh 💡";

  readonly INFO_SNIPPET = "Festanstellung - Vollzeit - München";

  readonly TASKS = [
    "Fullstack Development einer Webplattform mit Angular und Node",
    "Design und Anbindung von REST-Services",
    "Aufbauen der Deployement Umgebung / Testen der Applikation",
    "Für komplexe Aufgabenstellungen möglichst einfache und wirkungsvolle Lösungen entwickeln und vorantreiben"
  ];

  readonly QUALIFICATIONS = [
    "Abgeschlossenes Studium der Informatik, abgeschlossene Ausbildung zum Fachinformatiker oder vergleichbare Kenntnisse aus der Praxis",
    "Sehr gute Kenntnisse in JavaScript, TypeScript, Angular, RxJs, Webpack, HTML5 und (S)CSS - oder ähnlichen Technologien " +
      "(ein guter Entwickler ist nicht auf bestimmte Technologien angewiesen)",
    "Interesse und Leidenschaft, zu lernen und mit neuen Technologien zu experimentieren",
    'Eine "you build it, you run it"-Mentalität',
    "Die Fähigkeit, selbstständig und ergebnisorientiert zu arbeiten",
    "Gute Englischkenntnisse in Wort und Schrift"
  ];

  readonly BENEFITS = [
    "Ein schneller 2 Schritte Einstellungsprozess (diese Ausschreibung verstehen und ein Interview)",
    "Flexible Arbeitszeiten (Gleitzeit)",
    "Hohe Eigenständigkeit und die Arbeit mit dem gesamten Tech-Stack von der Datenbank bis zum Browser",
    "Ein kleines Team mit flachen Hierarchien",
    "Abwechslungsreiche und interessante Arbeitsinhalte",
    "30 Urlaubstage und kleine Teamevents",
    "Sehr gute Entwicklungsmöglichkeiten",
    "Möglichkeit eigene Ideen voranzutreiben",
    "Einzigartige Herausforderungen wie Dezentralisierung, Echtzeit-Synchronisierung und alle Herausforderungen welche das aufbauen " +
      "einer Plattform mit sich bringt"
  ];

  readonly ABOUT_US =
    "Wir sind eine soziale Plattform für Newcomer im Filmbereich. Bei uns steht der Community Faktor im Vordergrund und kann mit der " +
    "Projekt- und Stellensuche vereint werden. Unsere Vision: Wir möchten Newcomer im Filmbereich bei Ihrer Umsetzung von Projekten " +
    "unterstützen. Wir wollen der Partner für Newcomer werden von der Filmidee bis zur Veröffentlichung des ersten eigenen Werks. " +
    "Nicht nur die Stellen- und Projektsuche soll den Arbeitsalltag von Studierenden erleichtern und Ihnen dabei helfen neue " +
    "Crewmitglieder zu finden. Sondern auch der Pazz Booster soll ein finanzieller Extra-Schub für eine besonders gelungene Filmidee" +
    " sein.";

  readonly ADDON = "Bewerbungen können auch an info@pazz.de geschickt werden.";
  readonly SORRY =
    "Schade das es nicht mit uns klappt. Wir hoffen du schaust bei uns nochmal vorbei.";

  constructor(
    private employeeService: EmployeeService,
    private applicantService: ApplicantService
  ) {}

  // TODO: move this code to service
  checkQualifications() {
    return this.QUALIFICATIONS.every(qualification => {
      this.applicantService.currentApplicant.hasQualification(qualification);
    });
  }

  canBeHired() {
    return (
      this.checkQualifications() &&
      this.employeeService.isImpressionPositiveAfterInterview()
    );
  }
}

// Follow up:
// https://stackblitz.com/edit/jasmine-in-angular-plku5z?file=src/app/app.component.spec.ts
