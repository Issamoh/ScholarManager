<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Etudiant;

class BasicTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetRoute()
    {
        $response = $this->get('/');
        
        $response->assertStatus(200);
        $response = $this->get('api/etudiants');
        $response->assertStatus(200);
       
       
    }
    public function testPostRoute() {
        
        
        $parameters = [
            'nom' => 'Infinix',
            'prenom' => 'Infinix',
            'dateNaissance' => '2019-10-10',
            'lieuNaissance' => 'Infinix',
            'email' => 'Infinix@gmail.com',
            'moyenneBac' => '15',
            'gender' => 'Mâle',
            'tel' => '0555923264',
        ];
        $response=$this->post("api/ajoutEtudiant", $parameters, []);
        $response
            ->assertStatus(201)
            ->assertJson([
                'created' => true,
            ]);
    }

}
