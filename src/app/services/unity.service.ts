import { Injectable } from '@angular/core';
import { UnityLoader} from './UnityLoader.js';
import { UnityProgress} from './UnityProgress.js';
@Injectable({
  providedIn: 'root'
})
export class UnityService {

  public unityInstance: any;
  constructor() {
    window["UnityLoader"] = UnityLoader;
    window["UnityProgress"] = UnityProgress;
   }
  loadProject(){
   this.unityInstance = UnityLoader.instantiate("gameContainer", "assets/build/Build.json", {onProgress: UnityProgress});
  }
}
