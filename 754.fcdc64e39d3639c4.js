"use strict";(self.webpackChunkEntregaFinal=self.webpackChunkEntregaFinal||[]).push([[754],{9754:(J,r,i)=>{i.r(r),i.d(r,{AlumnosModule:()=>k});var p=i(8996),d=i(7155);let f=[{id:1,apellido:"gomez",nombre:"camilo",edad:22},{id:2,apellido:"fernandez",nombre:"daniel",edad:25},{id:3,apellido:"lopez",nombre:"martin",edad:26}];var u=i(4006),s=i(5412),t=i(4650),A=i(9549),_=i(4144),h=i(4859);let C=(()=>{class e{constructor(n,l,o){this.dialogRef=n,this.datos=l,this.fb=o,this.idAlumno=0,this.titulo="Crear Alumno",this.formAlumno=this.fb.group({apellido:[null,u.kI.required],nombre:[null,u.kI.required],edad:[null,u.kI.required]}),null!=l&&l.id>0&&(this.idAlumno=l.id,this.titulo="Editar Alumno",this.formAlumno.setValue({apellido:l.apellido,nombre:l.nombre,edad:l.edad}))}ngOnInit(){}grabar(){this.dialogRef.close({data:this.formAlumno.value,id:this.idAlumno})}cancelar(){this.dialogRef.close()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.so),t.Y36(s.WI,8),t.Y36(u.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-alta-alumnos"]],decls:23,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"formGroup"],["appFuente20",""],["matInput","","formControlName","apellido","placeholder","Ingrese un Apellido"],["matInput","","formControlName","nombre","placeholder","Ingrese un nombre"],["matInput","","formControlName","edad","placeholder","Ingrese un nombre"],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","",3,"click"],["mat-button","",3,"disabled","click"]],template:function(n,l){1&n&&(t.TgZ(0,"h1",0),t._uU(1),t.qZA(),t.TgZ(2,"div",1)(3,"form",2)(4,"mat-form-field")(5,"mat-label",3),t._uU(6,"Apellido"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"mat-form-field")(10,"mat-label",3),t._uU(11,"Nombre"),t.qZA(),t._UZ(12,"input",5),t.qZA(),t._UZ(13,"br"),t.TgZ(14,"mat-form-field")(15,"mat-label",3),t._uU(16,"Edad"),t.qZA(),t._UZ(17,"input",6),t.qZA()()(),t.TgZ(18,"div",7)(19,"button",8),t.NdJ("click",function(){return l.cancelar}),t._uU(20,"Cancelar"),t.qZA(),t.TgZ(21,"button",9),t.NdJ("click",function(){return l.grabar()}),t._uU(22,"Guardar"),t.qZA()()),2&n&&(t.xp6(1),t.Oqu(l.titulo),t.xp6(2),t.Q6J("formGroup",l.formAlumno),t.xp6(18),t.Q6J("disabled",!l.formAlumno.valid))},dependencies:[s.ZT,s.uh,s.xY,s.H8,A.KE,A.hX,_.Nt,h.lW,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u]}),e})();var g=i(7392);function Z(e,a){1&e&&(t.TgZ(0,"mat-header-cell",12),t._uU(1,"Nombre"),t.qZA())}function T(e,a){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",n.apellido+" "+n.nombre," ")}}function b(e,a){1&e&&(t.TgZ(0,"mat-header-cell",12),t._uU(1,"Edad"),t.qZA())}function I(e,a){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",n.edad," ")}}function L(e,a){1&e&&t._UZ(0,"mat-header-cell")}function N(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"mat-cell")(1,"button",13)(2,"mat-icon",14),t.NdJ("click",function(){const m=t.CHM(n).$implicit,c=t.oxw();return t.KtG(c.openDialog(m))}),t._uU(3,"edit"),t.qZA()()()}}function x(e,a){1&e&&t._UZ(0,"mat-header-cell")}function U(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"mat-cell")(1,"button",13)(2,"mat-icon",14),t.NdJ("click",function(){const m=t.CHM(n).$implicit,c=t.oxw();return t.KtG(c.eliminar(m.id))}),t._uU(3,"delete"),t.qZA()()()}}function D(e,a){1&e&&t._UZ(0,"mat-header-row")}function E(e,a){1&e&&t._UZ(0,"mat-row")}const v=[{path:"",component:(()=>{class e{constructor(n){this.dialog=n,this.dataInicial=f,this.ELEMENT_DATA=new d.by(f),this.displayedColumns=["nombre","edad","editar","eliminar"]}ngOnInit(){}openDialog(n,l){this.dialog.open(C,{width:"50%",height:"50%",data:n,id:l}).beforeClosed().subscribe(m=>{null!=m&&null!=m.data&&(m.id>0?this.editar(m.data,m.id):this.alta(m.data))})}alta(n){this.dataInicial.push({id:this.dataInicial.length+1,...n}),this.ELEMENT_DATA.data=this.dataInicial}editar(n,l){let o=this.dataInicial.findIndex(m=>m.id==l);this.dataInicial[o].apellido=n.apellido,this.dataInicial[o].nombre=n.nombre,this.dataInicial[o].edad=n.edad}eliminar(n){let l=this.dataInicial.findIndex(o=>o.id==n);this.dataInicial.splice(l,1),this.ELEMENT_DATA.data=this.dataInicial}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-lista-alumnos"]],decls:21,vars:3,consts:[[3,"dataSource"],["matColumnDef","nombre"],["appFuente20","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","edad"],["matColumnDef","editar"],[4,"matHeaderCellDef"],["matColumnDef","eliminar"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[1,"d-flex","justify-content-left","w-100"],["mat-raised-button","",3,"click"],["appFuente20",""],["mat-icon-button",""],[3,"click"]],template:function(n,l){1&n&&(t.TgZ(0,"h1"),t._uU(1,"Lista de Alumnos"),t.qZA(),t.TgZ(2,"mat-table",0),t.ynx(3,1),t.YNc(4,Z,2,0,"mat-header-cell",2),t.YNc(5,T,2,1,"mat-cell",3),t.BQk(),t.ynx(6,4),t.YNc(7,b,2,0,"mat-header-cell",2),t.YNc(8,I,2,1,"mat-cell",3),t.BQk(),t.ynx(9,5),t.YNc(10,L,1,0,"mat-header-cell",6),t.YNc(11,N,4,0,"mat-cell",3),t.BQk(),t.ynx(12,7),t.YNc(13,x,1,0,"mat-header-cell",6),t.YNc(14,U,4,0,"mat-cell",3),t.BQk(),t.YNc(15,D,1,0,"mat-header-row",8),t.YNc(16,E,1,0,"mat-row",9),t.qZA(),t._UZ(17,"br"),t.TgZ(18,"div",10)(19,"button",11),t.NdJ("click",function(){return l.openDialog()}),t._uU(20,"Agregar Alumno"),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("dataSource",l.ELEMENT_DATA),t.xp6(13),t.Q6J("matHeaderRowDef",l.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",l.displayedColumns))},dependencies:[d.BZ,d.fO,d.as,d.w1,d.Dz,d.nj,d.ge,d.ev,d.XQ,d.Gk,g.Hw,h.lW]}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(v),p.Bz]}),e})();var Y=i(4466);let k=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[Y.m,y]}),e})()}}]);