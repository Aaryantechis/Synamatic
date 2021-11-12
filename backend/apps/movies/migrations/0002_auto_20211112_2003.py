# Generated by Django 3.2.4 on 2021-11-12 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='description',
            field=models.TextField(max_length=500, verbose_name='description'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='name',
            field=models.CharField(db_index=True, max_length=50, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='release_type',
            field=models.CharField(choices=[('Newly Released', 'Newly Released'), ('Coming Soon', 'Coming Soon')], max_length=50, verbose_name='release_type'),
        ),
    ]
