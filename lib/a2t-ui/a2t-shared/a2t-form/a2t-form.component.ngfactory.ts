/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './a2t-form-field/a2t-form-field.component.ngfactory';
import * as i2 from './a2t-form-field/a2t-form-field.component';
import * as i3 from './a2t-form.component';
import * as i4 from '@angular/forms';
import * as i5 from '@angular/common';
import * as i6 from './a2t-form.service';
const styles_A2tFormComponent:any[] = ['.a2t-form[_ngcontent-%COMP%] {\n            background-color: white;\n            border-radius: 3px;\n            box-shadow: 0px 1px 5px 0 rgba(0,0,0,0.3);\n            padding-top: 20px;\n            font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;\n        }\n\n        .a2t-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n            width: 100%;\n\n            transition: .3s;\n            background-color: #72c380;\n\n            border-bottom-right-radius: 3px;\n            border-bottom-left-radius: 3px;\n\n            outline: none;\n            text-align: center;\n            font-weight: 400;\n            border: none;\n            font-size: 16px;\n            line-height: 30px;\n\n            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n            color: white;\n            border-bottom: 3px solid transparent;\n        }\n\n        .a2t-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n            background-color: #eee !important;\n            cursor: not-allowed;\n            color: #999;\n            text-shadow: none;\n        }\n\n        .a2t-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n            background-color: #a6d9ae;\n        }'];
export const RenderType_A2tFormComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_A2tFormComponent,data:{}});
function View_A2tFormComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a2t-form-field',
      ([] as any[]),(null as any),(null as any),(null as any),i1.View_A2tFormFieldComponent_0,
      i1.RenderType_A2tFormFieldComponent)),i0.ɵdid(114688,(null as any),0,i2.A2tFormFieldComponent,
      ([] as any[]),{question:[0,'question'],form:[1,'form']},(null as any)),(_l()(),
      i0.ɵted((null as any),['\n            ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _v.context.$implicit;
    const currVal_1:any = _co._formService.formGroup;
    _ck(_v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_A2tFormComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵncd((null as any),0),(_l()(),i0.ɵand(0,(null as any),(null as any),
      0))],(null as any),(null as any));
}
function View_A2tFormComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['Submitting ...']))],(null as any),(null as any));
}
export function View_A2tFormComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),17,'form',[['class','a2t-form'],['novalidate','']],
      [[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',
          (null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],
          [2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],[[(null as any),
          'ngSubmit'],[(null as any),'submit'],[(null as any),'reset']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i3.A2tFormComponent = _v.component;
        if (('submit' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,3).onSubmit($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('reset' === en)) {
          const pd_1:any = ((<any>i0.ɵnov(_v,3).onReset()) !== false);
          ad = (pd_1 && ad);
        }
        if (('ngSubmit' === en)) {
          const pd_2:any = ((<any>_co._formService.submit()) !== false);
          ad = (pd_2 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i4.ɵbf,([] as any[]),
      (null as any),(null as any)),i0.ɵdid(540672,(null as any),0,i4.FormGroupDirective,
      [[8,(null as any)],[8,(null as any)]],{form:[0,'form']},{ngSubmit:'ngSubmit'}),
      i0.ɵprd(2048,(null as any),i4.ControlContainer,(null as any),[i4.FormGroupDirective]),
      i0.ɵdid(16384,(null as any),0,i4.NgControlStatusGroup,[i4.ControlContainer],
          (null as any),(null as any)),(_l()(),i0.ɵted((null as any),['\n\n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_A2tFormComponent_1)),
      i0.ɵdid(802816,(null as any),0,i5.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),7,'button',
          [['type','submit']],[[8,'disabled',0]],(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_A2tFormComponent_2)),
      i0.ɵdid(16384,(null as any),0,i5.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_A2tFormComponent_3)),
      i0.ɵdid(16384,(null as any),0,i5.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n    ']))],(_ck,_v) => {
    var _co:i3.A2tFormComponent = _v.component;
    const currVal_7:any = _co._formService.formGroup;
    _ck(_v,3,0,currVal_7);
    const currVal_8:any = _co._formService.fields;
    _ck(_v,8,0,currVal_8);
    const currVal_10:boolean = !_co._formService.submitLock;
    _ck(_v,13,0,currVal_10);
    const currVal_11:any = _co._formService.submitLock;
    _ck(_v,16,0,currVal_11);
  },(_ck,_v) => {
    var _co:i3.A2tFormComponent = _v.component;
    const currVal_0:any = i0.ɵnov(_v,5).ngClassUntouched;
    const currVal_1:any = i0.ɵnov(_v,5).ngClassTouched;
    const currVal_2:any = i0.ɵnov(_v,5).ngClassPristine;
    const currVal_3:any = i0.ɵnov(_v,5).ngClassDirty;
    const currVal_4:any = i0.ɵnov(_v,5).ngClassValid;
    const currVal_5:any = i0.ɵnov(_v,5).ngClassInvalid;
    const currVal_6:any = i0.ɵnov(_v,5).ngClassPending;
    _ck(_v,1,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_9:boolean = ((!_co._formService.formGroup.valid || _co._formService.formGroup.pristine) || _co._formService.submitLock);
    _ck(_v,10,0,currVal_9);
  });
}
export function View_A2tFormComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'a2t-form',([] as any[]),
      (null as any),(null as any),(null as any),View_A2tFormComponent_0,RenderType_A2tFormComponent)),
      i0.ɵdid(49152,(null as any),0,i3.A2tFormComponent,[i6.A2tFormService],(null as any),
          (null as any))],(null as any),(null as any));
}
export const A2tFormComponentNgFactory:i0.ComponentFactory<i3.A2tFormComponent> = i0.ɵccf('a2t-form',
    i3.A2tFormComponent,View_A2tFormComponent_Host_0,{},{},['*']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2dsZWJtaWtoZWV2L2FuZ3VsYXIyLXRva2VuL3NyYy9hMnQtdWkvYTJ0LXNoYXJlZC9hMnQtZm9ybS9hMnQtZm9ybS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvZ2xlYm1pa2hlZXYvYW5ndWxhcjItdG9rZW4vc3JjL2EydC11aS9hMnQtc2hhcmVkL2EydC1mb3JtL2EydC1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL2dsZWJtaWtoZWV2L2FuZ3VsYXIyLXRva2VuL3NyYy9hMnQtdWkvYTJ0LXNoYXJlZC9hMnQtZm9ybS9hMnQtZm9ybS5jb21wb25lbnQudHMuQTJ0Rm9ybUNvbXBvbmVudC5odG1sIiwibmc6Ly8vVXNlcnMvZ2xlYm1pa2hlZXYvYW5ndWxhcjItdG9rZW4vc3JjL2EydC11aS9hMnQtc2hhcmVkL2EydC1mb3JtL2EydC1mb3JtLmNvbXBvbmVudC50cy5BMnRGb3JtQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgICAgIDxmb3JtIGNsYXNzPVwiYTJ0LWZvcm1cIlxuICAgICAgICAgICAgKG5nU3VibWl0KT1cIl9mb3JtU2VydmljZS5zdWJtaXQoKVwiXG4gICAgICAgICAgICBbZm9ybUdyb3VwXT1cIl9mb3JtU2VydmljZS5mb3JtR3JvdXBcIj5cblxuICAgICAgICAgICAgPGEydC1mb3JtLWZpZWxkXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGZpZWxkIG9mIHRoaXMuX2Zvcm1TZXJ2aWNlLmZpZWxkc1wiXG4gICAgICAgICAgICAgICAgW3F1ZXN0aW9uXT1cImZpZWxkXCJcbiAgICAgICAgICAgICAgICBbZm9ybV09XCJfZm9ybVNlcnZpY2UuZm9ybUdyb3VwXCI+XG4gICAgICAgICAgICA8L2EydC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIV9mb3JtU2VydmljZS5mb3JtR3JvdXAudmFsaWQgfHwgX2Zvcm1TZXJ2aWNlLmZvcm1Hcm91cC5wcmlzdGluZSB8fCBfZm9ybVNlcnZpY2Uuc3VibWl0TG9ja1wiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIV9mb3JtU2VydmljZS5zdWJtaXRMb2NrXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLnN1Ym1pdExvY2tcIj5TdWJtaXR0aW5nIC4uLjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgIiwiPGEydC1mb3JtPjwvYTJ0LWZvcm0+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNLWTtNQUFBO3lDQUFBLFVBQUE7TUFBQSx1RUFHb0M7YUFBQTs7SUFEaEM7SUFDQTtJQUhKLFdBRUksVUFDQSxTQUhKOzs7OzJCQU9JOzs7O29CQUNBO01BQUEsd0VBQXNDO2FBQUE7OztvQkFidEQsK0NBQ1E7TUFBQTtNQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFDSTtVQUFBO1VBQUE7UUFBQTtRQURKO01BQUEsdUNBQUE7TUFBQSxvQ0FBQTtNQUFBO2FBQUE7YUFBQTtVQUFBLDZCQUV5QztNQUVyQzthQUFBOzRCQUFBLHlDQUlpQjtVQUFBLHVCQUVqQjtVQUFBO1VBQUEsZ0JBQStILHVEQUMzSDtpQkFBQTthQUFBO1VBQUEsd0JBQTBEO01BQzFEO2FBQUE7VUFBQSx3QkFBMkQ7TUFDdEQsK0NBQ047VUFBQTs7SUFaSDtJQUZKLFdBRUksU0FGSjtJQUtRO0lBREosV0FDSSxTQURKO0lBT2dCO0lBQVosWUFBWSxVQUFaO0lBQ007SUFBTixZQUFNLFVBQU47OztJQVpSO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsV0FBQSxxRUFBQTtJQVUwQjtJQUF0QixZQUFzQixTQUF0Qjs7OztvQkNYWjtNQUFBO2FBQUE7VUFBQTs7OyJ9
