"use strict";(self.webpackChunkEntregaFinal=self.webpackChunkEntregaFinal||[]).push([[650],{3650:(E,v,a)=>{a.r(v),a.d(v,{AlumnosModule:()=>O});var r=a(8996),t=a(4650),C=a(7524);let A=(()=>{class n{constructor(e){this.clienteHttp=e}getAll(){return this.clienteHttp.getAll("Alumnos")}get(e){return this.clienteHttp.get("Alumnos/"+e)}post(e){return this.clienteHttp.post(e,"Alumnos")}put(e){return this.clienteHttp.put(e,"Alumnos/"+e.Id)}delete(e){return this.clienteHttp.delete("Alumnos/"+e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(C.G))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var h=a(4859),c=a(3546),d=a(6895);function Z(n,l){if(1&n&&(t.TgZ(0,"div")(1,"mat-card-title-group")(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5),t.qZA(),t.TgZ(6,"mat-card-subtitle"),t._uU(7),t.ALo(8,"date"),t.qZA(),t._UZ(9,"img",3),t.qZA()()),2&n){const e=l.ngIf;t.xp6(3),t.Oqu(e.Apellidos+" "+e.Nombre),t.xp6(2),t.Oqu(e.Email),t.xp6(2),t.hij("Fecha de nacimiento: ",t.xi3(8,4,e.FechaDeNacimiento,"dd/MM/yyyy"),""),t.xp6(2),t.s9C("src",e.Avatar,t.LSH)}}let N=(()=>{class n{constructor(e,o){this.activateRoute=e,this.alumnoService=o}ngOnInit(){this.activateRoute.paramMap.subscribe(e=>{let o=parseInt(e.get("id")||"0");this.alumno$=this.alumnoService.get(o)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.gz),t.Y36(A))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-alumnos-detalle"]],decls:8,vars:3,consts:[[1,"example-card"],[4,"ngIf"],["mat-button","","routerLink","/Alumnos"],["mat-card-lg-image","","alt","Photo of a Shiba Inu",3,"src"]],template:function(e,o){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Detalle de Alumno"),t.qZA(),t.TgZ(2,"mat-card",0),t.YNc(3,Z,10,7,"div",1),t.ALo(4,"async"),t.TgZ(5,"mat-card-actions")(6,"button",2),t._uU(7,"Volver"),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngIf",t.lcZ(4,1,o.alumno$)))},dependencies:[h.lW,c.a8,c.C1,c.n5,c.$j,c.hq,c.WU,d.O5,r.rH,d.Ov,d.uU],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}"]}),n})();var i=a(4006),u=a(5412),g=a(9549),b=a(4144),_=a(9602);let x=(()=>{class n{constructor(e,o,m,p,f){this.dialogRef=e,this.datos=o,this.fb=m,this.alumnosService=p,this.titleCasePipe=f,this.idAlumno=0,this.titulo="Crear Alumno",this.formAlumno=this.fb.group({apellidos:new i.NI(null,[i.kI.required]),nombre:new i.NI(null,[i.kI.required]),email:new i.NI(null,[i.kI.required]),fechaDeNacimiento:new i.NI}),null!=o&&o.Id>0&&(this.idAlumno=o.Id,this.titulo="Editar Alumno",this.formAlumno.setValue({apellidos:o.Apellidos,nombre:o.Nombre,email:o.Email,fechaDeNacimiento:o.FechaDeNacimiento}))}ngOnInit(){}grabar(){console.log(this.datos),null!=this.datos?this.datos.Id>0&&this.put():this.post(),this.dialogRef.close()}cancelar(){this.dialogRef.close()}post(){const e={Nombre:this.titleCasePipe.transform(this.formAlumno.value.nombre),Apellidos:this.titleCasePipe.transform(this.formAlumno.value.apellidos),Email:this.formAlumno.value.email,FechaDeNacimiento:this.formAlumno.value.fechaDeNacimiento,Avatar:"",Id:Math.round(1e3*Math.random())};console.log(e.Id),this.alumnosService.post(e)}put(){const e={Nombre:this.titleCasePipe.transform(this.formAlumno.value.nombre),Apellidos:this.titleCasePipe.transform(this.formAlumno.value.apellidos),Email:this.formAlumno.value.email,FechaDeNacimiento:this.formAlumno.value.fechaDeNacimiento,Avatar:"",Id:this.idAlumno};console.log(e.Id),this.alumnosService.put(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.so),t.Y36(u.WI,8),t.Y36(i.qu),t.Y36(A),t.Y36(d.rS))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-alta-alumnos"]],decls:29,vars:5,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"formGroup"],["appFuente20",""],["matInput","","formControlName","apellidos","placeholder","Ingrese un Apellido"],["matInput","","formControlName","nombre","placeholder","Ingrese un nombre"],["matInput","","formControlName","email","placeholder","Ingrese un email"],["matInput","","formControlName","fechaDeNacimiento",3,"matDatepicker"],["matSuffix","",3,"for"],["fechaDeNacimiento",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","",3,"click"],["mat-button","",3,"disabled","click"]],template:function(e,o){if(1&e&&(t.TgZ(0,"h1",0),t._uU(1),t.qZA(),t.TgZ(2,"div",1)(3,"form",2)(4,"mat-form-field")(5,"mat-label",3),t._uU(6,"Apellido"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"mat-form-field")(9,"mat-label",3),t._uU(10,"Nombre"),t.qZA(),t._UZ(11,"input",5),t.qZA(),t._UZ(12,"br"),t.TgZ(13,"mat-form-field")(14,"mat-label",3),t._uU(15,"Email"),t.qZA(),t._UZ(16,"input",6),t.qZA(),t.TgZ(17,"mat-form-field")(18,"mat-label",3),t._uU(19,"Fecha de Nacimiento"),t.qZA(),t._UZ(20,"input",7)(21,"mat-datepicker-toggle",8)(22,"mat-datepicker",null,9),t.qZA()()(),t.TgZ(24,"div",10)(25,"button",11),t.NdJ("click",function(){return o.cancelar}),t._uU(26,"Cancelar"),t.qZA(),t.TgZ(27,"button",12),t.NdJ("click",function(){return o.grabar()}),t._uU(28,"Guardar"),t.qZA()()),2&e){const m=t.MAs(23);t.xp6(1),t.Oqu(o.titulo),t.xp6(2),t.Q6J("formGroup",o.formAlumno),t.xp6(17),t.Q6J("matDatepicker",m),t.xp6(1),t.Q6J("for",m),t.xp6(6),t.Q6J("disabled",!o.formAlumno.valid)}},dependencies:[u.ZT,u.uh,u.xY,u.H8,g.KE,g.hX,g.R9,b.Nt,h.lW,_.Mq,_.hl,_.nW,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]}),n})();var s=a(7155),T=a(7392),I=a(1572);function D(n,l){1&n&&(t.TgZ(0,"div"),t._UZ(1,"mat-spinner",3),t.qZA())}function U(n,l){1&n&&(t.TgZ(0,"mat-header-cell",14),t._uU(1,"Nombre"),t.qZA())}function L(n,l){if(1&n&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&n){const e=l.$implicit;t.xp6(1),t.hij(" ",e.Apellidos+" "+e.Nombre," ")}}function y(n,l){1&n&&t._UZ(0,"mat-header-cell")}function Y(n,l){if(1&n&&(t.TgZ(0,"mat-cell")(1,"button",15)(2,"mat-icon",16),t._uU(3,"visibility"),t.qZA()()()),2&n){const e=l.$implicit;t.xp6(2),t.Q6J("routerLink","/Alumnos/"+e.Id)}}function F(n,l){1&n&&t._UZ(0,"mat-header-cell")}function k(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"mat-cell")(1,"button",15)(2,"mat-icon",17),t.NdJ("click",function(){const p=t.CHM(e).$implicit,f=t.oxw(2);return t.KtG(f.openDialog(p))}),t._uU(3,"edit"),t.qZA()()()}}function J(n,l){1&n&&t._UZ(0,"mat-header-cell")}function S(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"mat-cell")(1,"button",15)(2,"mat-icon",17),t.NdJ("click",function(){const p=t.CHM(e).$implicit,f=t.oxw(2);return t.KtG(f.eliminar(p.Id))}),t._uU(3,"delete"),t.qZA()()()}}function q(n,l){1&n&&t._UZ(0,"mat-header-row")}function M(n,l){1&n&&t._UZ(0,"mat-row")}function H(n,l){if(1&n&&(t.TgZ(0,"div")(1,"mat-table",4),t.ynx(2,5),t.YNc(3,U,2,0,"mat-header-cell",6),t.YNc(4,L,2,1,"mat-cell",7),t.BQk(),t.ynx(5,8),t.YNc(6,y,1,0,"mat-header-cell",9),t.YNc(7,Y,4,1,"mat-cell",7),t.BQk(),t.ynx(8,10),t.YNc(9,F,1,0,"mat-header-cell",9),t.YNc(10,k,4,0,"mat-cell",7),t.BQk(),t.ynx(11,11),t.YNc(12,J,1,0,"mat-header-cell",9),t.YNc(13,S,4,0,"mat-cell",7),t.BQk(),t.YNc(14,q,1,0,"mat-header-row",12),t.YNc(15,M,1,0,"mat-row",13),t.qZA()()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("dataSource",e.dataInicial),t.xp6(13),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns)}}const w=[{path:"",component:(()=>{class n{constructor(e,o,m){this.dialog=e,this.alumnosService=o,this.router=m,this.displayedColumns=["nombre","detalle","editar","eliminar"]}ngOnInit(){this.getAll()}openDialog(e,o){this.dialog.open(x,{width:"50%",height:"50%",data:e,id:o}).afterClosed().subscribe(()=>this.getAll())}getAll(){this.alumnosService.getAll().subscribe(e=>this.dataInicial=e.sort((o,m)=>o.Apellidos<m.Apellidos?-1:1))}eliminar(e){this.alumnosService.delete(e),this.getAll()}detalle(e){this.router.navigate(["Alumnos/Detalle/"+e])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.uw),t.Y36(A),t.Y36(r.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-lista-alumnos"]],decls:8,vars:2,consts:[[1,"d-flex","justify-content-left","w-100"],["mat-raised-button","",3,"click"],[4,"ngIf"],["diameter","40",2,"margin","0 auto"],[3,"dataSource"],["matColumnDef","nombre"],["appFuente20","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","detalle"],[4,"matHeaderCellDef"],["matColumnDef","editar"],["matColumnDef","eliminar"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["appFuente20",""],["mat-icon-button",""],[3,"routerLink"],[3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Lista de Alumnos"),t.qZA(),t.TgZ(2,"div",0)(3,"button",1),t.NdJ("click",function(){return o.openDialog()}),t._uU(4,"Agregar Alumno"),t.qZA()(),t._UZ(5,"br"),t.YNc(6,D,2,0,"div",2),t.YNc(7,H,16,3,"div",2)),2&e&&(t.xp6(6),t.Q6J("ngIf",null==o.dataInicial),t.xp6(1),t.Q6J("ngIf",null!=o.dataInicial))},dependencies:[s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,T.Hw,h.lW,I.Ou,d.O5,r.rH]}),n})()},{path:":id",component:N}];let Q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(w),r.Bz]}),n})();var R=a(4466);let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[A,d.rS],imports:[R.m,Q]}),n})()}}]);