AFRAME.registerComponent('blob', {
  schema: {
    width: {type: 'number', default: 1},
    height: {type: 'number', default: 128},
    depth: {type: 'number', default: 128},
    color: {type: 'color', default: '#AAA'},
    speed: {type: 'number', defualt: 0.001},
    spikes: {type: 'number', defualt: 2},
  },

  multiple: true,

  init: function () {
    const data = this.data;
    const el = this.el;
    this.geometry = new THREE.SphereGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshNormalMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    el.setObject3D('mesh', this.mesh);
  },

  tick: function (time, timeDelta) {
    const spikes = this.data.spikes;
    const speed = this.data.speed;
    for (let i = 0; i < this.geometry.vertices.length; i++) {
      const p = this.geometry.vertices[i];
      p
        .normalize()
        .multiplyScalar(
          1 + 0.25 * noise.perlin3(p.x * spikes + time * speed, p.y * spikes, p.z * spikes)
        );
    }
    this.geometry.computeVertexNormals();
    this.geometry.normalsNeedUpdate = true;
    this.geometry.verticesNeedUpdate = true;
  }
});
