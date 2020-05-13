import { defineFeature, loadFeature } from 'jest-cucumber';

import login from './login';

const feature = loadFeature('tests/unit/login/login.feature');

let form = {
  userName: '',
  password: '',
};

const userNameReg = (userName: string) => {
  if (userName.length >= 5 && userName.length <= 20) return true;
  else return false;
};

const passwordReg = /^[a-z-A-Z-0-9]{8,20}$/;

let role: string;
let url = '';
let body = {};

jest.mock('axios', () => ({
  post: (_url: string, _role: string, _body: object) => {
    return new Promise((resolve) => {
      url = _url;
      body = _body;

      let menuList;

      if (_role === 'admin') {
        menuList = "Admin's function list , the format is JSON .";
      } else if (_role === 'staff') {
        menuList = "Staff's function list , the format is JSON .";
      } else if (_role === 'doctor') {
        menuList = "Dcotor's function list , the format is JSON .";
      }

      resolve(menuList);
    });
  },
}));

let menuList: any;

defineFeature(feature, (test) => {
  test('用戶登入醫院管理系統', ({ given, when, then }) => {
    given(/^用戶的身分為 (.*)$/, (identity) => {
      role = identity;
    });

    when(/^用戶輸入 (.*) 與 (.*)$/, (userName, password) => {
      form.userName = userName;
      form.password = password;
    });

    when('前台驗證用戶名稱與密碼', () => {
      expect(userNameReg(form.userName)).toBe(true);
      expect(passwordReg.test(form.password)).toBe(true);
    });

    when('Post api', async () => {
      menuList = await login.authenticate(role, form);

      expect(url).toBe('/api/login');
      expect(body).toEqual(form);
    });

    then(/^成功登入後，預設畫面的側邊選單功能應為 (.*)$/, (response) => {
      expect(menuList).toBe(response);
    });
  });
});
