<?php

namespace App\Http\Controllers\Editors;

use App\Http\Controllers\Controller;
use App\Models\Campaigns\Campaign;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Redirect;
use Carbon\Carbon; // Make sure to import Carbon

class CampaignEditorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->merge([
            'slug' =>  !$request->has("slug") || $request->post("slug") === "" ? Str::slug($request->get("title")) : Str::slug($request->post("slug")),
            'form_type' =>  !$request->has("form_type") || $request->post("form_type") === "" ? "article" : "card",
        ]);
        $id = $id ?? $request->post('id');


        $request->validate([
            'title' => ['required'],
            'slug' => ['required', 'min:2', 'alpha_dash', 'max:160', Rule::unique('campaigns')->where(function ($query) use ($request) {
                return $query->where('slug', Str::slug($request->post('slug')));
            })->ignore($id, 'id')],
            'form_type' => 'required|in:card,list,manual,package,qurban,zakat_fitr,zakat_mal',
            'content' => ['required'],
            'goal' => ['required', 'integer'],
            'start_date' => 'required|date',
            'finish_date' => 'required|date|after:start_date',
        ]);

        $campaign = new Campaign();
        if ($id) {
            $campaign = Campaign::find($id);
        }
        $campaign->title = trim($request->get('title'));
        $campaign->slug = Str::slug($request->get('slug'));

        $campaign->content = $request->get('content');

        $campaign->form_type = $request->get('form_type');

        $campaign->publised = $request->get('publised');

        $campaign->goal = $request->get('goal');

        $campaign->start_date = Carbon::parse($request->get('start_date'))->format('Y-m-d H:i:s');

        $campaign->finish_date = Carbon::parse($request->get('finish_date'))->format('Y-m-d H:i:s');
        // dd($campaign);
        $campaign->save();
        return Redirect::route('editor.campaign.editor', ["id" => $campaign->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Campaign $campaign)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Campaign $campaign, Request $request)
    {
        $id = $request->has('id') ? (int)$request->get('id') : null;

        if ($id) {
            $campaign = Campaign::with(['featuredImage'])->findOrFail($id);
        }
        // dd($campaign);

        return Inertia::render('campaign/editor', [
            "data" => $campaign
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Campaign $campaign)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Campaign $campaign)
    {
        //
    }
}
