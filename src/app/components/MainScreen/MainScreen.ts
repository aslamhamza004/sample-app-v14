import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeNestedDataSource,
} from "@angular/material/tree";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy,
  TemplateRef,
  Inject
} from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-main-screen",
  templateUrl: "./MainScreen.html",
  styleUrls: ["./MainScreen.scss"]
})
export class MainScreenComponent implements OnInit, OnDestroy {
  
  radioButtonOptionsa50b863da2654: any = [
    {
      classButton: "mat-radio-button-a50b863da2654-0",
      optionDisplayKey: "Male",
      selectedValueKey: "Male",
      color: "accent",
      checked: true,
      labelPosition: "after",
      disabled: false
    },
    {
      classButton: "mat-radio-button-a50b863da2654-1",
      optionDisplayKey: "Female",
      selectedValueKey: "Female",
      color: "accent",
      checked: false,
      labelPosition: "after",
      disabled: false
    },
    {
      classButton: "mat-radio-button-a50b863da2654-2",
      optionDisplayKey: "Rather not to say",
      selectedValueKey: "Rather not to say",
      color: "accent",
      checked: false,
      labelPosition: "after",
      disabled: false
    }
  ];
  customDataSourceb522a27a27104: any[] = [
    { source: "Direct", total: "2873 visits" },
    { source: "Facebook", total: "2000 visits" },
    { source: "Instagram", total: "2873 visits" },
    { source: "Twitter", total: "2673 visits" },
    { source: "Whatsapp", total: "2123 visits" },
    { source: "Threads", total: "1258 visits" },
    { source: "snapchat", total: "1200 visits" },
    { source: "Google plus", total: "90 visits" },
    { source: "Slack", total: "120 visits" },
    { source: "Teams", total: "100 visits" },
    { source: "youtube", total: "3000 visits" }
  ];
  customDataSource48b47f0c5a704: any[] = [
    {
      orderNumber: "cell-content-0-0",
      amountStatus: "cell-content-1-0",
      paymentMethod: "Paypal",
      status: "waiting",
      actions: "cell-content-4-0"
    },
    {
      orderNumber: "cell-content-0-1",
      amountStatus: "cell-content-1-1",
      paymentMethod: "Pay on Delivery",
      status: "completed",
      actions: "cell-content-4-1"
    },
    {
      orderNumber: "cell-content-0-2",
      amountStatus: "cell-content-1-2",
      paymentMethod: "Sofort",
      status: "approved",
      actions: "cell-content-4-2"
    },
    {
      orderNumber: "cell-content-0-3",
      amountStatus: "cell-content-1-3",
      paymentMethod: "Pay on Delivery",
      status: "waiting",
      actions: "cell-content-4-3"
    },
    {
      orderNumber: "cell-content-0-4",
      amountStatus: "cell-content-1-4",
      paymentMethod: "Paypal",
      status: "completed",
      actions: "cell-content-4-4"
    }
  ];

  
  

  conditionalValidator(predicate: any, validator: any) {
    return (formControl: any) => {
      if (!formControl.parent) {
        return null;
      }
      if (predicate()) {
        return validator(formControl);
      }
      return null;
    };
  }

  @ViewChild("cellTemplateRefOrderNumber48b47f0c5a704", { static: true })
  cellTemplateRefOrderNumber48b47f0c5a704!: TemplateRef<any>;
  @ViewChild("cellTemplateRefAmountStatus48b47f0c5a704", { static: true })
  cellTemplateRefAmountStatus48b47f0c5a704!: TemplateRef<any>;
  @ViewChild("cellTemplateRefActions48b47f0c5a704", { static: true })
  cellTemplateRefActions48b47f0c5a704!: TemplateRef<any>;

  @ViewChild("cellTemplateRefTotalb522a27a27104", { static: true })
  cellTemplateRefTotalb522a27a27104!: TemplateRef<any>;

  selectc32581c4a1204 = new FormControl({ value: null, disabled: false }, [
    this.conditionalValidator(() => "true", Validators.required)
  ]);

  select5ac823d446b64 = new FormControl({ value: null, disabled: false }, [
    this.conditionalValidator(() => "true", Validators.required)
  ]);

  input2ddec3918f694 = new FormControl({ value: null, disabled: false }, [
    this.conditionalValidator(() => "true", Validators.required)
  ]);

  textArea3823af3b2eb54 = new FormControl({ value: null, disabled: false }, [
    this.conditionalValidator(() => "true", Validators.required)
  ]);

  radioButtona50b863da2654 = new FormControl(
    { value: "", disabled: false },
    []
  );

  datePicker1def5efb03f94 = new FormControl({ value: null, disabled: false }, [
    this.conditionalValidator(() => "true", Validators.required)
  ]);

  input9283519bc39e4 = new FormControl({ value: null, disabled: false }, [
    this.conditionalValidator(() => "true", Validators.required)
  ]);

  inputa8c83a18af264 = new FormControl({ value: null, disabled: false }, [
    this.conditionalValidator(() => "true", Validators.required)
  ]);

  

  
  columns48b47f0c5a704 = [
    {
      cellTemplate: this.cellTemplateRefOrderNumber48b47f0c5a704,
      field: "orderNumber",
      header: "orderNumber",
      width: "246.39990234375px",
      type: "string"
    },
    {
      cellTemplate: this.cellTemplateRefAmountStatus48b47f0c5a704,
      field: "amountStatus",
      header: "amountStatus",
      width: "246.39990234375px",
      type: "string"
    },
    {
      field: "paymentMethod",
      header: "paymentMethod",
      width: "246.39990234375px",
      type: "string"
    },
    {
      field: "status",
      header: "status",
      width: "246.400146484375px",
      type: "string"
    },
    {
      cellTemplate: this.cellTemplateRefActions48b47f0c5a704,
      field: "actions",
      header: "actions",
      width: "246.39990234375px",
      type: "string"
    }
  ];
  dataSource48b47f0c5a704: any = new MatTableDataSource(
    this.customDataSource48b47f0c5a704
  );

  columnsb522a27a27104 = [
    { field: "source", header: "source", width: "155px", type: "string" },
    {
      cellTemplate: this.cellTemplateRefTotalb522a27a27104,
      field: "total",
      header: "total",
      width: "155px",
      type: "string"
    }
  ];
  dataSourceb522a27a27104: any = new MatTableDataSource(
    this.customDataSourceb522a27a27104
  );

  

  constructor() {}
  ngOnInit() {
    
    this.columns48b47f0c5a704[0].cellTemplate =
      this.cellTemplateRefOrderNumber48b47f0c5a704;
    this.columns48b47f0c5a704[1].cellTemplate =
      this.cellTemplateRefAmountStatus48b47f0c5a704;
    this.columns48b47f0c5a704[4].cellTemplate =
      this.cellTemplateRefActions48b47f0c5a704;

    this.columnsb522a27a27104[1].cellTemplate =
      this.cellTemplateRefTotalb522a27a27104;

    
  }

  ngOnDestroy() {}
}
