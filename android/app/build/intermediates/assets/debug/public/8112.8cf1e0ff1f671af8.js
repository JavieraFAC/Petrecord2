"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8112],{8112:(E,g,l)=>{l.r(g),l.d(g,{TutoresPageModule:()=>S});var d=l(177),s=l(4341),a=l(4742),f=l(9384),p=l(467),o=l(4438),h=l(4379),_=l(6893),b=l(9198);function F(n,c){if(1&n){const r=o.RV6();o.j41(0,"div",12)(1,"ion-item")(2,"ion-label",13),o.EFF(3,"Nombre de la mascota"),o.k0s(),o.j41(4,"ion-input",14),o.mxI("ngModelChange",function(e){const i=o.eBV(r).$implicit;return o.DH7(i.nombre,e)||(i.nombre=e),o.Njj(e)}),o.k0s()(),o.j41(5,"ion-item")(6,"ion-label",13),o.EFF(7,"Especie de la mascota"),o.k0s(),o.j41(8,"ion-input",15),o.mxI("ngModelChange",function(e){const i=o.eBV(r).$implicit;return o.DH7(i.especie,e)||(i.especie=e),o.Njj(e)}),o.k0s()(),o.j41(9,"ion-item")(10,"ion-label",13),o.EFF(11,"Fecha de Nacimiento"),o.k0s(),o.j41(12,"ion-datetime",16),o.mxI("ngModelChange",function(e){const i=o.eBV(r).$implicit;return o.DH7(i.fechaNacimiento,e)||(i.fechaNacimiento=e),o.Njj(e)}),o.k0s()(),o.j41(13,"ion-button",17),o.bIt("click",function(){const e=o.eBV(r).index,i=o.XpG();return o.Njj(i.eliminarMascota(e))}),o.EFF(14,"Eliminar Mascota"),o.k0s()()}if(2&n){const r=c.$implicit;o.R7$(4),o.R50("ngModel",r.nombre),o.R7$(4),o.R50("ngModel",r.especie),o.R7$(4),o.R50("ngModel",r.fechaNacimiento)}}let T=(()=>{var n;class c{constructor(){this.form=new s.gE({id:new s.MJ(""),nombre:new s.MJ("",[s.k0.required,s.k0.minLength(3)]),apellido:new s.MJ("",[s.k0.required,s.k0.minLength(3)]),direccion:new s.MJ("",[s.k0.required]),telefono:new s.MJ("",[s.k0.required,s.k0.minLength(8)]),email:new s.MJ("")}),this.firebaseS=(0,o.WQX)(_.f),this.cargandoS=(0,o.WQX)(h.X),this.user={},this.mascotas=[]}ngOnInit(){this.user=this.cargandoS.getFromLocalStorage("user"),this.tutor&&(this.form.patchValue(this.tutor),this.mascotas=this.tutor.mascotas||[])}agregarEspecie(){return(0,p.A)(function*(){})()}submit(){var t=this;return(0,p.A)(function*(){if(t.form.valid){const e=`users/${t.user.uid}/tutores`,i={...t.form.value,mascotas:t.mascotas},u=yield t.cargandoS.loading();yield u.present();try{t.tutor?(yield t.firebaseS.editarTutor(e,i.id,i),t.cargandoS.dismissmodal({success:!0,tutor:i}),t.cargandoS.presentToast({message:"Tutor actualizado exitosamente",duration:1500,color:"success",position:"middle"})):(delete i.id,yield t.firebaseS.agregarTutor(e,i),t.cargandoS.dismissmodal({success:!0,tutor:i}),t.cargandoS.presentToast({message:"Nuevo tutor agregado",duration:1500,color:"success",position:"middle"})),yield u.dismiss()}catch(m){yield u.dismiss(),console.error(m),t.cargandoS.presentToast({message:"Error",duration:1500,color:"danger",position:"middle"})}}})()}agregarMascota(){this.mascotas.push({nombre:"",especie:"",fechaNacimiento:""})}eliminarMascota(t){this.mascotas.splice(t,1)}}return(n=c).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.VBU({type:n,selectors:[["app-newtutor"]],inputs:{tutor:"tutor"},decls:18,vars:7,consts:[[1,"modal-content"],[1,"form-container"],[1,"ion-card"],[3,"ngSubmit","keypress.enter","formGroup"],["autocomplete","nombre","type","text","label","Nombre",3,"control"],["autocomplete","apellido","type","text","label","Apellido",3,"control"],["autocomplete","direccion","type","text","label","Ingrese direccion",3,"control"],["autocomplete","tel","type","number","label","Tel\xe9fono",3,"control"],["autocomplete","email","type","email","label","Correo electr\xf3nico",3,"control"],["type","submit","expand","block","shape","round",2,"padding","20px"],["class","mascota-form",4,"ngFor","ngForOf"],[3,"click"],[1,"mascota-form"],["position","floating"],["placeholder","Nombre",3,"ngModelChange","ngModel"],["placeholder","Especie",3,"ngModelChange","ngModel"],["display-format","DD/MM/YYYY","placeholder","Selecciona la fecha",3,"ngModelChange","ngModel"],["color","danger",3,"click"]],template:function(t,e){1&t&&(o.j41(0,"ion-content",0)(1,"div",1)(2,"ion-card",2)(3,"form",3),o.bIt("ngSubmit",function(){return e.submit()})("keypress.enter",function(){return e.submit()}),o.j41(4,"h2"),o.EFF(5,"Datos Tutor"),o.k0s(),o.nrm(6,"app-formulario",4)(7,"app-formulario",5)(8,"app-formulario",6)(9,"app-formulario",7)(10,"app-formulario",8),o.j41(11,"ion-button",9),o.EFF(12," Guardar tutor "),o.k0s()()(),o.j41(13,"div")(14,"ion-card",2),o.DNE(15,F,15,3,"div",10),o.j41(16,"ion-button",11),o.bIt("click",function(){return e.agregarMascota()}),o.EFF(17,"Agregar Mascota"),o.k0s()()()()()),2&t&&(o.R7$(3),o.Y8G("formGroup",e.form),o.R7$(3),o.Y8G("control",e.form.controls.nombre),o.R7$(),o.Y8G("control",e.form.controls.apellido),o.R7$(),o.Y8G("control",e.form.controls.direccion),o.R7$(),o.Y8G("control",e.form.controls.telefono),o.R7$(),o.Y8G("control",e.form.controls.email),o.R7$(5),o.Y8G("ngForOf",e.mascotas))},dependencies:[d.Sq,a.Jm,a.b_,a.W9,a.A9,a.$w,a.uz,a.he,a.Je,a.Gw,s.qT,s.BC,s.cb,s.j4,s.vS,b.c],styles:[".modal-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:90%;padding:16px;box-shadow:0 4px 12px #0003;overflow:hidden}"]}),c})();var M=l(7988);function v(n,c){if(1&n&&(o.j41(0,"li"),o.EFF(1),o.k0s()),2&n){const r=c.$implicit;o.R7$(),o.Lme(" ",r.nombre," - ",r.especie," ")}}function j(n,c){if(1&n&&(o.j41(0,"div")(1,"h4"),o.EFF(2,"Mascotas:"),o.k0s(),o.j41(3,"ul"),o.DNE(4,v,2,2,"li",6),o.k0s()()),2&n){const r=o.XpG().$implicit;o.R7$(4),o.Y8G("ngForOf",r.mascotas)}}function k(n,c){if(1&n){const r=o.RV6();o.j41(0,"ion-item-sliding")(1,"ion-item")(2,"ion-label")(3,"h3"),o.EFF(4),o.k0s(),o.j41(5,"p"),o.EFF(6),o.k0s(),o.j41(7,"p"),o.EFF(8),o.k0s(),o.j41(9,"p"),o.EFF(10),o.k0s(),o.DNE(11,j,5,1,"div",7),o.k0s(),o.j41(12,"ion-buttons",8)(13,"ion-button",3),o.bIt("click",function(){const e=o.eBV(r).$implicit,i=o.XpG();return o.Njj(i.editarTutor(e))}),o.nrm(14,"ion-icon",9),o.k0s()()()()}if(2&n){const r=c.$implicit;o.R7$(4),o.Lme("",r.nombre," ",r.apellido,""),o.R7$(2),o.SpI("Tel\xe9fono: ",r.telefono,""),o.R7$(2),o.SpI("Direcci\xf3n: ",r.direccion,""),o.R7$(2),o.SpI("Correo: ",r.email,""),o.R7$(),o.Y8G("ngIf",null==r.mascotas?null:r.mascotas.length)}}const C=[{path:"",component:(()=>{var n;class c{constructor(){this.firebaseS=(0,o.WQX)(_.f),this.cargandoS=(0,o.WQX)(h.X),this.tutores=[]}ngOnInit(){}user(){return this.cargandoS.getFromLocalStorage("user")}ionViewWillEnter(){this.cargarTutores()}cargarTutores(){let t=`users/${this.user().uid}/tutores`;this.firebaseS.mostrarTutores(t).subscribe({next:e=>{this.tutores=e},error:e=>{console.error("Error al cargar tutores: ",e)}})}agregartutor(){var t=this;return(0,p.A)(function*(){(yield t.cargandoS.presentModal({component:T,cssClass:"modaltutor"})).onDidDismiss().then(i=>{var u;null!==(u=i.data)&&void 0!==u&&u.success&&t.cargarTutores()})})()}editarTutor(t){var e=this;return(0,p.A)(function*(){(yield e.cargandoS.presentModal({component:T,componentProps:{tutor:t},cssClass:"modaltutor"})).onDidDismiss().then(u=>{var m;null!==(m=u.data)&&void 0!==m&&m.success&&e.cargarTutores()})})()}}return(n=c).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.VBU({type:n,selectors:[["app-tutores"]],decls:12,vars:1,consts:[["title","TUTORES"],[1,"fondo"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","add"],[1,"ion-card"],[4,"ngFor","ngForOf"],[4,"ngIf"],["slot","end"],["name","create-outline"]],template:function(t,e){1&t&&(o.nrm(0,"app-header",0),o.j41(1,"ion-content",1)(2,"ion-fab",2)(3,"ion-fab-button",3),o.bIt("click",function(){return e.agregartutor()}),o.nrm(4,"ion-icon",4),o.k0s()(),o.j41(5,"ion-card",5)(6,"ion-card-title")(7,"h2"),o.EFF(8,"Lista de tutores"),o.k0s()(),o.j41(9,"ion-card-content")(10,"ion-list"),o.DNE(11,k,15,6,"ion-item-sliding",6),o.k0s()()()()),2&t&&(o.R7$(11),o.Y8G("ngForOf",e.tutores))},dependencies:[d.Sq,d.bT,a.Jm,a.QW,a.b_,a.I9,a.tN,a.W9,a.Q8,a.YW,a.iq,a.uz,a.A7,a.he,a.nf,M.l]}),c})()}];let N=(()=>{var n;class c{}return(n=c).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.$C({type:n}),n.\u0275inj=o.G2t({imports:[f.iI.forChild(C),f.iI]}),c})();var y=l(3656);let S=(()=>{var n;class c{}return(n=c).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.$C({type:n}),n.\u0275inj=o.G2t({imports:[d.MD,s.YN,a.bv,N,y.h]}),c})()}}]);