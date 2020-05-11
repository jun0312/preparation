import vuetify from '@/plugins/vuetify';

export default {
  namespaced: true,
  state: {
    blocks: [
      {
        zh: '系統底色',
        value: 'background',
        color: '#FFFFFF',
      },
      {
        zh: '功能選單',
        value: 'list',
        color: '#009688',
      },
      {
        zh: '內容框（標題列）',
        value: 'card',
        color: '#62CFBB',
      },
      {
        zh: '按鈕',
        value: 'button',
        color: 'primary',
      },
    ],
  },
  mutations: {
    SWITCH_COLOR(state: any, payload: any) {
      const res = state.blocks.find((item: any) => item.value === payload.selectBlock);
      res.color = payload.selectColor;
    },
    RESET_COLOR(state: any) {
      vuetify.framework.theme.dark = false;
      state.blocks.forEach((item: any, index: any) => {
        const i = item;
        if (!index) {
          i.color = '#FFFFFF';
        } else if (item.value === 'list') {
          i.color = '#009688';
        } else if (item.value === 'card') {
          i.color = '#62CFBB';
        } else {
          i.color = 'primary';
        }
      });
    },
  },
  getters: {
    blocks: (state: any) => state.blocks,
  },
};
