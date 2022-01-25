
import {PolyScene} from '@polygonjs/polygonjs/src/engine/scene/PolyScene';
// obj
import {CopNetworkObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/CopNetwork';
import {GeoObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/HemisphereLight';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/PerspectiveCamera';
import {SpotLightObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/SpotLight';
// sop
import {CopNetworkSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/CopNetwork';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/EventsNetwork';
import {HexagonsSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Hexagons';
import {InstanceSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Instance';
import {MaterialSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Material';
import {MaterialsNetworkSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/MaterialsNetwork';
import {MediapipeFacemeshDeformSopNode} from '@polygonjs/plugin-mediapipe-facemesh/dist/src/engine/nodes/sop/MediapipeFacemeshDeform';
import {MediapipeFacemeshTopologySopNode} from '@polygonjs/plugin-mediapipe-facemesh/dist/src/engine/nodes/sop/MediapipeFacemeshTopology';
import {MergeSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Merge';
import {RestAttributesSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/RestAttributes';
import {SphereSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Sphere';
import {TransformSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Transform';
// cop
import {BuilderCopNode} from '@polygonjs/polygonjs/src/engine/nodes/cop/Builder';
import {EnvMapCopNode} from '@polygonjs/polygonjs/src/engine/nodes/cop/EnvMap';
import {ImageCopNode} from '@polygonjs/polygonjs/src/engine/nodes/cop/Image';
import {WebCamCopNode} from '@polygonjs/polygonjs/src/engine/nodes/cop/WebCam';
// mat
import {MeshBasicMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshBasic';
import {MeshLambertBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshLambertBuilder';
import {MeshPhysicalBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshPhysicalBuilder';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/CameraOrbitControls';

export class PolySceneWithNodeMap_scene_01 extends PolyScene {
	node(path: '/hemisphereLight1'): HemisphereLightObjNode;
	node(path: '/spotLight1'): SpotLightObjNode;
	node(path: '/geo1'): GeoObjNode;
	node(path: '/geo1/mediapipeFacemeshTopology1'): MediapipeFacemeshTopologySopNode;
	node(path: '/geo1/mediapipeFacemeshDeform1'): MediapipeFacemeshDeformSopNode;
	node(path: '/geo1/material1'): MaterialSopNode;
	node(path: '/geo1/mediapipeFacemeshDeform2'): MediapipeFacemeshDeformSopNode;
	node(path: '/geo1/material2'): MaterialSopNode;
	node(path: '/geo1/transform1'): TransformSopNode;
	node(path: '/geo1/merge1'): MergeSopNode;
	node(path: '/geo1/mediapipeFacemeshDeform3'): MediapipeFacemeshDeformSopNode;
	node(path: '/geo1/material3'): MaterialSopNode;
	node(path: '/geo1/transform2'): TransformSopNode;
	node(path: '/geo1/restAttributes1'): RestAttributesSopNode;
	node(path: '/geo1/COP'): CopNetworkSopNode;
	node(path: '/geo1/COP/webCam1'): WebCamCopNode;
	node(path: '/geo1/MAT'): MaterialsNetworkSopNode;
	node(path: '/geo1/MAT/meshPhysicalBuilder1'): MeshPhysicalBuilderMatNode;
	node(path: '/geo1/MAT/meshPhysicalBuilder2'): MeshPhysicalBuilderMatNode;
	node(path: '/geo1/MAT/meshPhysicalBuilder3'): MeshPhysicalBuilderMatNode;
	node(path: '/perspectiveCamera1'): PerspectiveCameraObjNode;
	node(path: '/perspectiveCamera1/events1'): EventsNetworkSopNode;
	node(path: '/perspectiveCamera1/events1/cameraOrbitControls1'): CameraOrbitControlsEventNode;
	node(path: '/background'): GeoObjNode;
	node(path: '/background/sphere1'): SphereSopNode;
	node(path: '/background/instance1'): InstanceSopNode;
	node(path: '/background/hexagons1'): HexagonsSopNode;
	node(path: '/background/sphere2'): SphereSopNode;
	node(path: '/background/transform1'): TransformSopNode;
	node(path: '/background/material1'): MaterialSopNode;
	node(path: '/background/merge1'): MergeSopNode;
	node(path: '/background/MAT'): MaterialsNetworkSopNode;
	node(path: '/background/MAT/meshBasic1'): MeshBasicMatNode;
	node(path: '/background/MAT/meshStandardBuilder1'): MeshLambertBuilderMatNode;
	node(path: '/COP'): CopNetworkObjNode;
	node(path: '/COP/image1'): ImageCopNode;
	node(path: '/COP/envMap1'): EnvMapCopNode;
	node(path: '/COP/builder1'): BuilderCopNode;
	node(path: string):any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
		return super.node(path);
	}
}
