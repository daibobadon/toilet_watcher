import time
import RPi.GPIO as GPIO
import MySQLdb
 
GPIO.setmode(GPIO.BCM)
 
#GPIO18pinを入力モードとし、pull up設定とします 
GPIO.setup(18,GPIO.IN,pull_up_down=GPIO.PUD_UP)
 
sw_status = 1
 
# -*- coding: utf-8 -*-
# 接続する 
connection = MySQLdb.connect(
    host='localhost', user='test', passwd='test', db='toilet_watcher', charset='utf8')
cursor = connection.cursor()
# カーソルを取得する
cursor = connection.cursor()

while True:
    try:
        sw_status = GPIO.input(18)
        if sw_status == 0:
            print("Close")
            # 時間計測終了
            time_end = time.time()
            # 経過時間（秒）
            tim2 = time_end - time_sta
            print(tim2)
        else:
            # 時間計測開始
            time_sta = time.time()
            print("Open!")
        time.sleep(10.00)
    except:
        break
 
GPIO.cleanup()
print("end")
