/*
 Navicat MySQL Data Transfer

 Source Server         : 我的数据库
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : notesDB

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 31/03/2019 10:15:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for notesContent
-- ----------------------------
DROP TABLE IF EXISTS `notesContent`;
CREATE TABLE `notesContent` (
  `uid` int(10) unsigned NOT NULL,
  `text` varchar(255) NOT NULL,
  `noteid` int(10) unsigned NOT NULL,
  PRIMARY KEY (`noteid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of notesContent
-- ----------------------------
BEGIN;
INSERT INTO `notesContent` VALUES (38046042, '第一条便签', 1);
INSERT INTO `notesContent` VALUES (38046042, '待办事项', 2);
INSERT INTO `notesContent` VALUES (38046042, '阳光明媚', 3);
INSERT INTO `notesContent` VALUES (38046042, 'login github', 5);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
