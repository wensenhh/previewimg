const app = getApp()

Page({
  data: {
    groupList: [{
        id: 1,
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570681519982&di=19e67801976d931b4df4daffc78389f5&imgtype=0&src=http%3A%2F%2Fwww.qiandaohu.cc%2Fxclyw%2Ftsxm%2Fxckb%2F201811%2FW020181105747191247924.jpg"
      },
      {
        id: 2,
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570681624267&di=a50ee274afe3bc9c5be421eac497f820&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D2975773045%2C3725003192%26fm%3D214%26gp%3D0.jpg"
      }
    ],
    ispreview: false
  },
  preview(e) {
    this.setData({
      ispreview: true
    })
  },
  onLoad: function () {

  },
})