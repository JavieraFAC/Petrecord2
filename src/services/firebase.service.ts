import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { Usuario } from 'src/app/models/usuario.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc, addDoc,collection, collectionData,query} from '@angular/fire/firestore';
import { CargandoService } from './cargando/cargando.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, uploadString,ref, getDownloadURL} from 'firebase/storage';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

auth = inject(AngularFireAuth);
firestore = inject(AngularFirestore);
cargandoS = inject(CargandoService);
storage = inject(AngularFireStorage);

  // Observable para el estado de autenticación
  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    // Actualiza el observable isAuthenticated$ cuando cambia el estado de autenticación
    this.auth.authState.subscribe(user => {
      this.isAuthenticated$.next(!!user);
    });
  }


//--------------------------------------------------------- VETERINARIO
//--------------------------------------------------------- VETERINARIO
//--- Autenticación de usuario

getAuth(){
  return getAuth();
}
// --- Logearse
signIn(usuario:Usuario){
  return signInWithEmailAndPassword(getAuth(), usuario.email, usuario.password );
}
//--- Crear usuario
signUp(usuario:Usuario){
  return createUserWithEmailAndPassword(getAuth(), usuario.email, usuario.password, );
}

// actualizar usuario
updateUser(displayName: string){
  return updateProfile(getAuth().currentUser, {displayName})
}

signOut(){
  getAuth().signOut();
  localStorage.removeItem('users');
  this.cargandoS.routerLink('/login');
}

// Base de datos

setDocument(path: string, data: any) {
  return setDoc(doc(getFirestore(),path),data);

}
  //Obtencion de datos de usuario
  async getDocumento (path:string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }

//obtener datos del usuario actual desde firebase
  async getUserData(uid: string) {
    const docRef = doc(getFirestore(), `users/${uid}`);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  }

  //---------------------------------------------------------
  //--------------------------------------------------------- TUTOR
  //--------------------------------------------------------- TUTOR


  agregarTutor(path: string, data: any) {
    return addDoc(collection(getFirestore(), path), data);
  }
  

  async uploadImagen(path: string, data_url:string){
    return uploadString(ref(getStorage(),path), data_url, 'data_url').then(()=>{
      return getDownloadURL(ref(getStorage(),path))
    })
  }

  mostrarTutores(path: string) {
    const ref = collection(getFirestore(), path);
    return collectionData(ref, { idField: 'id' });
  }
  
}
