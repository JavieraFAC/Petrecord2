"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5245],{5245:(R,m,l)=>{l.r(m),l.d(m,{ModificarperfilPageModule:()=>b});var f=l(177),c=l(4341),o=l(4742),g=l(9384),p=l(467),i=l(4438),h=l(4379),M=l(6893),F=l(7988);const P=()=>["/perfil"];function j(e,t){if(1&e&&(i.j41(0,"ion-avatar",24),i.nrm(1,"img",25),i.k0s()),2&e){const a=i.XpG();i.R7$(),i.Y8G("src",a.form.value.imagenPerfil,i.B4B)}}function _(e,t){1&e&&i.nrm(0,"ion-icon",26)}function k(e,t){if(1&e){const a=i.RV6();i.qex(0),i.j41(1,"ion-item")(2,"ion-label"),i.EFF(3),i.k0s(),i.nrm(4,"ion-input",29),i.j41(5,"ion-icon",30),i.bIt("click",function(){const n=i.eBV(a).index,d=i.XpG(2);return i.Njj(d.eliminarClinica(n))}),i.k0s()(),i.bVm()}if(2&e){const a=t.index;i.R7$(3),i.SpI("Cl\xednica ",a+1,":")}}function C(e,t){if(1&e){const a=i.RV6();i.j41(0,"div"),i.DNE(1,k,6,1,"ng-container",27),i.j41(2,"ion-button",28),i.bIt("click",function(){i.eBV(a);const n=i.XpG();return i.Njj(n.agregarClinica())}),i.EFF(3,"Agregar nueva cl\xednica"),i.k0s()()}if(2&e){const a=i.XpG();i.R7$(),i.Y8G("ngForOf",a.Vclinicas)}}function v(e,t){1&e&&i.nrm(0,"ion-icon",31)}const E=[{path:"",component:(()=>{var e;class t{constructor(){this.form=new c.gE({imagenPerfil:new c.MJ("",[c.k0.required])}),this.firebaseS=(0,i.WQX)(M.f),this.cargandoS=(0,i.WQX)(h.X),this.tipoCuenta="",this.VatiendeClinica=!1,this.Vclinicas=[],this.VatiendeParticular=!1}ngOnInit(){}tomarImagen(){var r=this;return(0,p.A)(function*(){const n=(yield r.cargandoS.tomarFoto("Foto de perfil")).dataUrl;r.form.controls.imagenPerfil.setValue(n)})()}toggleClinica(){this.VatiendeClinica||(this.Vclinicas=[])}agregarClinica(){this.Vclinicas.push("")}eliminarClinica(r){this.Vclinicas.splice(r,1)}}return(e=t).\u0275fac=function(r){return new(r||e)},e.\u0275cmp=i.VBU({type:e,selectors:[["app-modificarperfil"]],decls:67,vars:8,consts:[["noPerfil",""],["fileInputPerfil",""],["title","Modificar perfil"],[1,"fondo"],[1,"ion-card"],[1,"centrar",3,"formGroup"],["class","imagenPerfil",4,"ngIf"],["class","icono","name","image-outline",4,"ngIf"],["shape","round",3,"click"],["position","stacked"],["placeholder","Ingrese universidad de egreso"],["type","number","placeholder","A\xf1o de egreso"],["placeholder","Ingrese pa\xeds donde se otorg\xf3"],["placeholder","Ingrese especialidad"],["slot","end",3,"ngModelChange","ionChange","ngModel"],[4,"ngIf"],["slot","end",3,"ngModelChange","ngModel"],[1,"preview-container"],["alt","Firma"],["name","camera","slot","end"],["name","cloud-upload-outline","slot","end"],["type","file","hidden",""],["expand","block","shape","round",1,"submit"],["expand","block","fill","clear","shape","round",3,"routerLink"],[1,"imagenPerfil"],[3,"src"],["name","image-outline",1,"icono"],[4,"ngFor","ngForOf"],[3,"click"],["placeholder","Ingrese nombre cl\xednica"],["name","trash-outline","slot","end",3,"click"],["name","person-circle-outline","size","large"]],template:function(r,n){if(1&r){const d=i.RV6();i.nrm(0,"app-header",2),i.j41(1,"ion-content",3)(2,"ion-card",4)(3,"form",5),i.DNE(4,j,2,1,"ion-avatar",6)(5,_,1,0,"ion-icon",7),i.nrm(6,"br"),i.j41(7,"ion-button",8),i.bIt("click",function(){return i.eBV(d),i.Njj(n.tomarImagen())}),i.EFF(8," Imagen de perfil "),i.k0s()()(),i.j41(9,"ion-card",4)(10,"ion-card-header")(11,"h2"),i.EFF(12,"PERFIL PROFESIONAL"),i.k0s()(),i.j41(13,"ion-card-content")(14,"ion-list")(15,"ion-item")(16,"ion-label",9),i.EFF(17,"Universidad"),i.k0s(),i.nrm(18,"ion-input",10),i.k0s(),i.j41(19,"ion-item")(20,"ion-label",9),i.EFF(21,"A\xf1o de egreso"),i.k0s(),i.nrm(22,"ion-input",11),i.k0s(),i.j41(23,"ion-item")(24,"ion-label",9),i.EFF(25,"Pa\xeds de registro"),i.k0s(),i.nrm(26,"ion-input",12),i.k0s(),i.j41(27,"ion-item")(28,"ion-label",9),i.EFF(29,"Especialidad"),i.k0s(),i.nrm(30,"ion-input",13),i.k0s()()()(),i.j41(31,"ion-card",4)(32,"ion-card-header")(33,"h2"),i.EFF(34,"DATOS LABORALES"),i.k0s()(),i.j41(35,"ion-card-content")(36,"ion-list")(37,"ion-item")(38,"ion-label"),i.EFF(39,"\xbfAtiendes en cl\xednica?"),i.k0s(),i.j41(40,"ion-toggle",14),i.mxI("ngModelChange",function(s){return i.eBV(d),i.DH7(n.VatiendeClinica,s)||(n.VatiendeClinica=s),i.Njj(s)}),i.bIt("ionChange",function(){return i.eBV(d),i.Njj(n.toggleClinica())}),i.k0s()(),i.DNE(41,C,4,1,"div",15),i.j41(42,"ion-item")(43,"ion-label"),i.EFF(44,"\xbfAtiendes a domicilio?"),i.k0s(),i.j41(45,"ion-toggle",16),i.mxI("ngModelChange",function(s){return i.eBV(d),i.DH7(n.VatiendeParticular,s)||(n.VatiendeParticular=s),i.Njj(s)}),i.k0s()()()()(),i.j41(46,"ion-card",4)(47,"ion-card-header")(48,"h2"),i.EFF(49," Im\xe1genes"),i.k0s()(),i.j41(50,"ion-card-content")(51,"ion-item")(52,"ion-label",9),i.EFF(53,"Firma profesional"),i.k0s(),i.j41(54,"div",17),i.qex(55),i.nrm(56,"img",18),i.bVm(),i.DNE(57,v,1,0,"ng-template",null,0,i.C5r),i.k0s(),i.nrm(59,"ion-icon",19)(60,"ion-icon",20)(61,"input",21,1),i.k0s()()(),i.j41(63,"ion-button",22),i.EFF(64," Guardar cambios\n"),i.k0s(),i.j41(65,"ion-button",23),i.EFF(66," Salir sin guardar\n"),i.k0s()()}2&r&&(i.R7$(3),i.Y8G("formGroup",n.form),i.R7$(),i.Y8G("ngIf",n.form.value.imagenPerfil),i.R7$(),i.Y8G("ngIf",!n.form.value.imagenPerfil),i.R7$(35),i.R50("ngModel",n.VatiendeClinica),i.R7$(),i.Y8G("ngIf",n.VatiendeClinica),i.R7$(4),i.R50("ngModel",n.VatiendeParticular),i.R7$(20),i.Y8G("routerLink",i.lJ4(7,P)))},dependencies:[f.Sq,f.bT,c.qT,c.BC,c.cb,c.vS,o.mC,o.Jm,o.b_,o.I9,o.ME,o.W9,o.iq,o.$w,o.uz,o.he,o.nf,o.BY,o.hB,o.su,o.Gw,o.N7,g.Wk,F.l,c.j4],styles:[".icono[_ngcontent-%COMP%]{font-size:100px;opacity:30%;align-items:center;border-radius:40px}.avatar[_ngcontent-%COMP%]{width:200px;height:200px;border-radius:40px;margin:0 auto;align-items:center}.centrar[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),t})()}];let I=(()=>{var e;class t{}return(e=t).\u0275fac=function(r){return new(r||e)},e.\u0275mod=i.$C({type:e}),e.\u0275inj=i.G2t({imports:[g.iI.forChild(E),g.iI]}),t})();var V=l(3656);let b=(()=>{var e;class t{}return(e=t).\u0275fac=function(r){return new(r||e)},e.\u0275mod=i.$C({type:e}),e.\u0275inj=i.G2t({imports:[f.MD,c.YN,o.bv,I,V.h]}),t})()}}]);