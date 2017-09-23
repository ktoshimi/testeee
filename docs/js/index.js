window.addEventListener('DOMContentLoaded', init);
 
function init() {
const width = 800;
  const height = 600;//幅800px、高さ600pxを設定
  // ここに処理を追加していきます
  const renderer = new THREE.WebGLRenderer(); //WebGLのレンダリングをするためのレンダラーを作成
  renderer.setSize(width, height); //幅800px、高さ600pxを設定
  document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene(); //シーンを作る(オブジェクトや光源置き場)



//カメラを作る

const camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 10000);
camera.position.set(0, 0, +1000);
// new THREE.PerspectiveCamera(画角, アスペクト比, 描画開始距離, 描画終了距離)

//立方体を作成
//立方体はメッシュという表示オブジェクトを使用して作成します。メッシュを作るには、ジオメトリ(形状)とマテリアル(素材)を用意する必要があります。

// new THREE.BoxGeometry(幅, 高さ, 奥行き)=形状によりいろいろなジオメトリを使用する
const geometry = new THREE.BoxGeometry(500, 500, 500);

//青色の質感
const material = new THREE.MeshPhongMaterial({ color: 0x0000ff });

//作成したジオメトリとマテリアルを使って、メッシュを作ります。作成したメッシュをシーンに追加しましょう。
// new THREE.Mesh(ジオメトリ,マテリアル)
const box = new THREE.Mesh(geometry, material);
// シーンに追加
scene.add(box);



//ライトを作る
// new THREE.DirectionalLight(色)
const directionalLight = new THREE.DirectionalLight(0xffffff);
// ライトの位置を変更
directionalLight.position.set(1, 1, 1);

//DirectionalLightは平行光源を意味します。平行光源は太陽光のように一定方向から差し込む光で

// シーンに追加
scene.add(directionalLight);

 // 初回実行
  tick();

  function tick() {
    requestAnimationFrame(tick);

    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

//レンダリング
renderer.render(scene, camera);


//renderer.render()メソッドに、先程作成したシーンとカメラを引数に渡すことで初めてcanvas上に描かれます。

}
}
