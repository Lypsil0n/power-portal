from datetime import datetime

import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view


@api_view(["GET"])
def get_power_stats_today(request):
    now = datetime.now()
    today = now.strftime("%Y/%m-%d")
    res = requests.get(
        f"https://www.elprisetjustnu.se/api/v1/prices/{today}_SE4.json"
    ).json()

    return JsonResponse(res, status=200, safe=False)


@api_view(["GET"])
def get_power_stats_today_avg(request):
    now = datetime.now()
    today = now.strftime("%Y/%m-%d")
    res = requests.get(
        f"https://www.elprisetjustnu.se/api/v1/prices/{today}_SE4.json"
    ).json()

    total_price = 0
    for item in res:
        total_price += item["SEK_per_kWh"]

    avg_price = round((total_price / 96), 2)

    return JsonResponse({"date": now.date(), "avg_price": avg_price}, status=200)


@api_view(["GET"])
def get_power_stats_today_min(request):
    now = datetime.now()
    today = now.strftime("%Y/%m-%d")
    res = requests.get(
        f"https://www.elprisetjustnu.se/api/v1/prices/{today}_SE4.json"
    ).json()

    min_price = min(item["SEK_per_kWh"] for item in res)

    return JsonResponse(
        {"min_price": min_price},
        status=200,
    )
