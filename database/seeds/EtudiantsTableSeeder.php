<?php

use Illuminate\Database\Seeder;
use App\Etudiant;
class EtudiantsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = \Faker\Factory::create();
 
        // Create 50 product records
        for ($i = 0; $i < 50; $i++) {
            Etudiant::create([
                'matricule' => $faker->title,
                'nom' => $faker->name,
                'prenom' => $faker->name,
                'dateNaissance' => $faker->name,
                'lieuNaissance' => $faker->name,
                'email' => $faker->name,
                'tel' => $faker->name
            ]);
        }
    }
}
