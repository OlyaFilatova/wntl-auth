import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { of } from "rxjs";
import { switchMap } from "rxjs/operators";

export class AuthFirebase {
  public static setupCurrentUser(angularFireAuth: AngularFireAuth) {
    return angularFireAuth.authState.pipe(
      switchMap((user) => of(user || null))
    );
  }

  public static async googleSignIn(angularFireAuth: AngularFireAuth) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await angularFireAuth.signInWithPopup(provider);
    return credential.user;
  }

  public static googleSignOut(angularFireAuth: AngularFireAuth) {
    return angularFireAuth.signOut();
  }
}
