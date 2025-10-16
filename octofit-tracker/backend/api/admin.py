from django.contrib import admin
from .models import Team, Activity, Workout, Leaderboard

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ['name', 'created_at']
    search_fields = ['name']

@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ['user', 'activity_type', 'duration', 'distance', 'calories_burned', 'date']
    list_filter = ['activity_type', 'date']
    search_fields = ['user__username']

@admin.register(Workout)
class WorkoutAdmin(admin.ModelAdmin):
    list_display = ['name', 'user', 'duration', 'difficulty', 'created_at']
    list_filter = ['difficulty', 'created_at']
    search_fields = ['name', 'user__username']

@admin.register(Leaderboard)
class LeaderboardAdmin(admin.ModelAdmin):
    list_display = ['user', 'points', 'rank', 'last_updated']
    list_filter = ['rank']
    search_fields = ['user__username']
